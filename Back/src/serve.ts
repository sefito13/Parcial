import "dotenv/config";
import app from "./app";
import { client } from "./config/db";

const PORT = process.env.PORT || 3000;

async function iniciar() {
  await client.connect();

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

iniciar().catch((error) => {
  console.error("Error al iniciar el servidor:", error);
  process.exit(1);
});