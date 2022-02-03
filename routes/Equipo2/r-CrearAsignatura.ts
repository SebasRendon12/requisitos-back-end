import { Router } from "express";
import { crearasignatura } from "../../controllers/Equipo2/c-CrearAsignatura";
import { ValidateFields } from "../../middlewares";
import { check } from "express-validator";

const router = Router();

router.post("/", [
  check("codigo", "codigo").not().isEmpty(),
  check("nivel", "nivel").not().isEmpty(),
  check("departamento", "departamento").not().isEmpty(),
  check("nombre", "nombre").not().isEmpty(),
  check("horas_actividad_presencial", "horas_actividad_presencial").not().isEmpty(),
  check("horas_actividad_autonomas", "horas_actividad_autonomas").not().isEmpty(),
  check("plan_de_estudios", "plan_de_estudios").not().isEmpty(),
  check("validable", "validable").not().isEmpty(),
  check("porcentaje_de_asistencia", "porcentaje_de_asistencia").not().isEmpty(),
  check("tipologia", "tipologia").not().isEmpty(),
  check("contenido", "contenido").not().isEmpty(),
  check("en_oferta", "en_oferta").not().isEmpty(),
  check("codigo_requisitos", "codigo_requisitos").not().isEmpty(),
  check("tipo_requisitos", "tipo_requisitos").not().isEmpty(),
  check("objetivo_de_formacion", "objetivo_de_formacion").not().isEmpty(),
  check("bibliografia_minima", "bibliografia_minima").not().isEmpty(),
  check("metodologia", "metodologia").not().isEmpty(),
  check("descripcion", "descripcion").not().isEmpty(),
  ValidateFields
], crearasignatura);

export default router;