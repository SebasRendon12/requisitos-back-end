import { Router } from "express";
import { check } from "express-validator";
import { getSesionController } from "../../controllers/g1/c_session";
import { ValidateFields } from "../../middlewares";

const router = Router();

router.get("/:id", [], getSesionController);
// router.post("/", [
//   check("name", "Nombre es requerido").not().isEmpty(),
//   check("age", "Edad es requerido").not().isEmpty(),
//   check("sex", "Sexo es requerido").not().isEmpty(),
//   ValidateFields
// ], saveuser);
// router.put("/:id", [
//   check("name", "Nombre es requerido").not().isEmpty(),
//   check("age", "Edad es requerido").not().isEmpty(),
//   check("sex", "Sexo es requerido").not().isEmpty(),
//   ValidateFields
// ], edituser);
// router.delete("/:id", [], deleteuser);

export default router;