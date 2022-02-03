import { Router } from "express";
import { getlistaasignaturasdepartamento } from "../../controllers/Equipo2/c-ListaAsignaturasDepartamento";

const router = Router();

router.get("/", [], getlistaasignaturasdepartamento);

export default router;