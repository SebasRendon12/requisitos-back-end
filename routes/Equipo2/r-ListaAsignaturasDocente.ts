import { Router } from "express";
import { getasignaturas } from "../../controllers/Equipo2/c-ListaAsignaturasDocente";

const router = Router();

router.get("/:id", [], getasignaturas);

export default router;