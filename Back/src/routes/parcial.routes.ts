import { Router } from "express";
import { obtenerMaterias } from "../controllers/parcial.controller";

const router = Router();

router.get("/materias", obtenerMaterias);

export default router;