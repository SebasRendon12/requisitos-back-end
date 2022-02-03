import { Router } from "express";
import { updateProgramacionAcademica } from "../../controllers/g7/programacionAcademica";
const router = Router();

router.put("/:id", updateProgramacionAcademica);

export default router;
