import { Router } from "express";
import { getuser } from "../../controllers/Equipo2/c-usuario";

const router = Router();

router.get("/:nombre_usuario/:contrasena/", [], getuser);

export default router;