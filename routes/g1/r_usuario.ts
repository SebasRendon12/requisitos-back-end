import { Router } from "express";
import { ValidateFields } from "../../middlewares";
import { check } from "express-validator";

const router = Router();

// router.get("/", [], getusers);
// router.get("/parent/:id", [], getuser);
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