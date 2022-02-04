import { Router } from "express";
import { crearactividades } from "../../controllers/Equipo2/c-CrearActividades";
import { ValidateFields } from "../../middlewares";
import { check } from "express-validator";

const router = Router();

router.post("/", [
  check("nombre", "Nombre es requerido").not().isEmpty(),
  check("porcentaje", "Edad es requerido").not().isEmpty(),
  ValidateFields
], crearactividades);

export default router;