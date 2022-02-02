import { Router } from "express";
import {
  getProyeccion,
  reviewProyeccion,
} from "../../controllers/g7/proyeccion";
const router = Router();

router.get("/", getProyeccion);
router.put("/", reviewProyeccion);

export default router;
