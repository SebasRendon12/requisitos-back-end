import { Router } from "express";
import { ValidateFields } from "../../middlewares";
import { check } from "express-validator";
import { signIn } from "../../controllers";

const router = Router();

router.post("/", [
  check("nombre_usuario", "El usuario es requerido").not().isEmpty(),
  check("contrasena", "La contraseña es requerida").not().isEmpty(),
  ValidateFields
], signIn);

export default router;