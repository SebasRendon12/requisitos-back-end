import { Router } from "express";
import { BuscarAsignatura } from "../../controllers/Equipo2/c-BuscarAsignatura";


const router = Router();

router.get("/:codigo_asignatura", [], BuscarAsignatura);

export default router;