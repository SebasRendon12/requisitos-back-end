import { Router } from "express";
import { createPrueba } from "../../controllers/g7/prueba";
const router = Router();

router.post("/", createPrueba);

export default router;
