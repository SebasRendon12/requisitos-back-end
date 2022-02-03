import { Router } from "express";
import { ValidateFields } from "../../middlewares";
import { check } from "express-validator";
import { solicitudasignatura } from "../../controllers/Equipo2/c-CrearSolicitudAsignatura";

const router = Router();

router.post("/", [
  check("id_docente", "id_docente").not().isEmpty(),
  check("tipo", "tipo").not().isEmpty(),
  check("nombre_asignatura", "nombre_asignatura").not().isEmpty(),
  check("nivel", "nivel").not().isEmpty(),
  check("archivos", "archivos").not().isEmpty(),
  check("archivos", "archivos").not().isEmpty(),
  ValidateFields
], solicitudasignatura);

export default router;