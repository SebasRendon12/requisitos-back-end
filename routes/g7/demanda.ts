import { Router } from "express";
import { createDemanda, getDemanda } from "../../controllers/g7/demanda";
const router = Router();

router.post("/", createDemanda);
router.get("/", getDemanda);

export default router;
