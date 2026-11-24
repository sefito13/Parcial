import { Request, Response } from 'express';
import { MateriaModel } from '../models/parcial.models';

export const obtenerMaterias = async (req: Request, res: Response) => {
  const materias = await MateriaModel.obtenerTodos();

  res.json(materias);
};