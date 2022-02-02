import { Router } from "express";
import { check } from "express-validator";
import { loginEstudiante, loginFuncionario } from "../../controllers/g6/c_autenticacion";
import { ValidateFields } from "../../middlewares";

const router = Router();

router.post("/signinfuncionario", [
    check("usuario","Usuario requerido").not().isEmpty(),
    check("contrasena","contraseña requerida").not().isEmpty(),
    ValidateFields
], loginFuncionario);
router.post("/signinestudiante", [
  check("usuario", "Usuario es requerida").not().isEmpty(),
  check("contrasena", "COntraseña es requerida").not().isEmpty(),
  ValidateFields
], loginEstudiante);
// router.put("/:id", [
//   check("name", "Nombre es requerido").not().isEmpty(),
//   check("age", "Edad es requerido").not().isEmpty(),
//   check("sex", "Sexo es requerido").not().isEmpty(),
//   ValidateFields
// ], edituser);

export default router;