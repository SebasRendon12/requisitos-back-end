import { Router } from "express";
import {
  createAsignatura,
  getAsignaturasPendientes,
  updateAsignatura,
  getAsignaturasAprobadas,
  getAsignaturasCodificadas,
} from "../../controllers/g7/asignatura";
import { createGrupo, updateGrupo } from "../../controllers/g7/grupo";
import { createProgramaAsignatura } from "../../controllers/g7/programaAsignatura";

const router = Router();

router.post("/", createAsignatura);
router.get("/pendientes", getAsignaturasPendientes);
router.get("/aprobadas", getAsignaturasAprobadas);
router.get("/codificadas", getAsignaturasCodificadas);
router.put("/:id", updateAsignatura);
router.post("/:id/grupo", createGrupo);
router.put("/:id/grupo", updateGrupo);

router.post("/:id/programa-asignatura", createProgramaAsignatura);
export default router;
