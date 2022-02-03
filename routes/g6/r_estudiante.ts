import { Router } from "express";
import {
    createEstudiante, getEstudiante, getEstudiantes,
    updateEstudianteResidencia,updateEstudianteFinanciera
} from "../../controllers/g6/c_estudiante";
import { ValidateFields } from "../../middlewares";


import path from "path"

import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req: Express.Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) {
     callback(null, path.join(__dirname,"../../public/g6")); 
 },
 filename: function (req: Express.Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) {
     callback(null,Date.now()+"_"+file.originalname);
 }
});

var upload = multer({ storage: storage });

const router = Router();

router.post("/", [ValidateFields], createEstudiante);

router.get("/", getEstudiantes);

router.get("/:id", getEstudiante);

router.put("/residencia/:id", [ValidateFields], updateEstudianteResidencia);

router.put("/financiera/:id",[upload.fields([
    {name:"recibo",maxCount:1},
    {name:"certificado",maxCount:1},
    {name:"declaracion",maxCount:1}])],
updateEstudianteFinanciera);


export default router;