import { client } from "../config/db";

export interface Curso {
  id: number;
  nombre: string;
  nrc: string;
  docente: string;
  email_docente: string;
}

export type NuevoCurso = Omit<Curso, "id">;

export const MateriaModel = {
  async obtenerTodos(): Promise<Curso[]> {
    const { rows } = await client.query<Curso>(
      "SELECT * FROM cursos ORDER BY id"
    );
    return rows;
  },
};