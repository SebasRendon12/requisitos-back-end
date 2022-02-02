import { Router } from "express";
import { getactividades, getcalificaciones } from "../../controllers/Equipo2/c-Calificaciones";

const router = Router();

router.get("/:id_grupo", [], getcalificaciones);
router.get("/:id_grupo/:codigo_asignatura", [], getactividades);

export default router;