import { Router } from "express";
import { createEstudiante, getEstudiante,getEstudiantes,
    updateEstudianteResidencia } from "../../controllers/g6/c_estudiante";
import { ValidateFields } from "../../middlewares";

const router = Router();

router.post("/", [ValidateFields], createEstudiante);

router.get("/", getEstudiantes);

router.get("/:id", getEstudiante);

router.put("/residencia/:id",[ValidateFields],updateEstudianteResidencia);

// router.put("/financiera/:id",[ValidateFields],updateEstudianteFinanciera);


export default router;