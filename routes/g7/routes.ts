import { Router } from "express";
import routesProyeccion from "./proyeccion";
import routesDemanda from "./demanda";
import routesAsignatura from "./asignatura";
import routesProgramaCalendario from "./programaCalendario";
import routesSalonDeClase from "./salonDeClase";
import routesProgramacionAcademica from "./programacionAcademica";

const router = Router();

router.use("/proyeccion", routesProyeccion);
router.use("/demanda", routesDemanda);
router.use("/asignatura", routesAsignatura);
router.use("/programa-calendario", routesProgramaCalendario);
router.use("/prueba", routesProgramaCalendario);
router.use("/salon", routesSalonDeClase);
router.use("/programacion-academica", routesProgramacionAcademica);

export default router;
