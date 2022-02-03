import { Router } from "express";
import { getasignaturassolicitud, getsolicitudescupo, deletesolicitudescupo } from "../../controllers/Equipo2/c-ListaAsignaturasSolicitud";

const router = Router();

router.get("/", [], getasignaturassolicitud);
router.get("/:codigo_asignatura", [], getsolicitudescupo );
router.delete("/:id", [], deletesolicitudescupo);

export default router;