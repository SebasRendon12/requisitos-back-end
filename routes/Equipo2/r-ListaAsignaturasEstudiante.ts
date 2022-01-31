import { Router } from "express";
import { getasignaturas } from "../../controllers/Equipo2/c-ListaAsignaturasEstudiante";

const router = Router();

router.get("/:id", [], getasignaturas);

export default router;