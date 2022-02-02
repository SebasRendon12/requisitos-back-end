import { Router } from "express";
import { getgrupos } from "../../controllers/Equipo2/c-ListaGruposVinculados";

const router = Router();

router.get("/:codigo_asignatura", [], getgrupos);

export default router;