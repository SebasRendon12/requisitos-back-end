import { Router } from "express";
import routesProyeccion from "./proyeccion";
import routesDemanda from "./demanda";
import routesAsignatura from "./asignatura";
const router = Router();

router.use("/proyeccion", routesProyeccion);
router.use("/demanda", routesDemanda);
router.use("/asignatura", routesAsignatura);

export default router;
