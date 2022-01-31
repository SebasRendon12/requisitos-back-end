import { Router } from "express";
import { createDemanda } from "../../controllers/g7/demanda";
const router = Router();

router.post("/", createDemanda);

export default router;
