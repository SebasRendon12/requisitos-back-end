import { Router } from "express";
import { ValidateFields } from "../../middlewares";
import { check } from "express-validator";
import { solicitudcupo } from "../../controllers/Equipo2/c-CrearSolicitudCupo";

const router = Router();

router.post("/", [
  check("codigo_asignatura", "codigo_asignatura").not().isEmpty(),
  check("grupo", "grupo").not().isEmpty(),
  check("motivo", "motivo").not().isEmpty(),
  ValidateFields
], solicitudcupo);

export default router;