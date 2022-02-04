import { Router } from "express";
import { ValidateFields } from "../../middlewares";
import { check } from "express-validator";
import { gethorario, sethorario } from "../../controllers/Equipo2/c-DefinirHorario";

const router = Router();

router.get("/:id", [], gethorario);
router.put("/:id", [
  check("hora_inicio", "hora_inicio").not().isEmpty(),
  check("hora_final", "hora_final").not().isEmpty(),
  check("dias", "dias").not().isEmpty(),
  ValidateFields
], sethorario);

export default router;
