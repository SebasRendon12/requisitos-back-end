import { Router } from "express";
import {
  createAsignatura,
  getAsignaturasPendientes,
  updateAsignatura,
} from "../../controllers/g7/asignatura";
import { createGrupo } from "../../controllers/g7/grupo";
import { createProgramaAsignatura } from "../../controllers/g7/programaAsignatura";

const router = Router();

router.post("/", createAsignatura);
router.get("/pendientes", getAsignaturasPendientes);
router.put("/", updateAsignatura);
router.post("/:id/grupo", createGrupo);
router.post("/:id/programa-asignatura", createProgramaAsignatura);
export default router;
