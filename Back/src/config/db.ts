import { Client } from "pg";

export const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "ad2a5a19",
  database: "Parcial",
});

async function main() {
  await client.connect();

  const result = await client.query("SELECT * FROM cursos");
  console.log(result.rows);

  await client.end();
}

main().catch(console.error);