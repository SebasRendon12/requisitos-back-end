import { Router } from "express";
import { createProgramaCalendario } from "../../controllers/g7/programaCalendario";
const router = Router();

router.post("/", createProgramaCalendario);

export default router;
