import { Router } from "express";
import { check } from "express-validator";
import { deleteSesionController, getSesionController, saveSessionController } from "../../controllers/g1/c_session";
import { ValidateFields } from "../../middlewares";

const router = Router();

router.get("/:id", [], getSesionController);
router.post("/", [
  check("fecha", "La fecha es requerida").not().isEmpty(),
  check("usuario_id", "El id usuario es requerido").not().isEmpty(),
  ValidateFields
], saveSessionController);
// router.put("/:id", [
//   check("name", "Nombre es requerido").not().isEmpty(),
//   check("age", "Edad es requerido").not().isEmpty(),
//   check("sex", "Sexo es requerido").not().isEmpty(),
//   ValidateFields
// ], edituser);
router.delete("/:usuario_id", [], deleteSesionController);

export default router;