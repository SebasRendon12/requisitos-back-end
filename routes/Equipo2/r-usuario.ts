import { Router } from "express";
import { getusers, getuser } from "../../controllers/Equipo2/c-usuario";

const router = Router();

router.get("/", [], getusers);
router.get("/:nombre_usuario/:contrasena/", [], getuser);

export default router;