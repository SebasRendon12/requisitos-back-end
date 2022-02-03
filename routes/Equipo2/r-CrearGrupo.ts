import { Router } from "express";
import { ValidateFields } from "../../middlewares";
import { check } from "express-validator";
import { creargrupo } from "../../controllers/Equipo2/c-CrearGrupo";

const router = Router();

router.post("/", [
  check("codigo_asignatura", "codigo_asignatura").not().isEmpty(),
  check("id_docente", "id_docente").not().isEmpty(),
  check("numero_grupo", "numero_grupo").not().isEmpty(),
  check("numero_de_cupos", "numero_de_cupos").not().isEmpty(),
  check("salon", "salon").not().isEmpty(),
  ValidateFields
], creargrupo);

export default router;