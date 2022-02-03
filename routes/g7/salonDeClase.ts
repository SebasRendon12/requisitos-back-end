import { Router } from "express";
import { createSalonDeClase } from "../../controllers/g7/salonDeClase";
const router = Router();

router.post("/", createSalonDeClase);

export default router;
