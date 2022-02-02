import { Request, Response } from "express";
import { GetEstudiante,GetEstudiantes,
    UpdateEstudianteFinanciera,UpdateEstudianteResidencia, CreateEstudiante } from "../../logic";


export const getEstudiante = async (req: Request, res: Response) => {
    const { cedula } = req.params;
    const estudiante = await GetEstudiante(cedula);
    if (estudiante) {
        res.status(200).json({ succes: true, message: estudiante })
    }
    else {
        res.status(401).json({
            success: false,
            message: "Estudiante no existe"
        })
    }
}

export const getEstudiantes = async (req: Request, res: Response) => {
    const estudiantes = await GetEstudiantes();
    if (estudiantes) {
        return res.status(200).json({ succes: true, message: estudiantes })
    }
    else {
        return res.status(401).json({
            success: false, message: "Error de datos ingresados"
        })
    }
}

// export const updateEstudianteFinanciera = async (req: Request, res: Response) => {
//     const { cedula } = req.params;
//     const files = req.files;
//     const estudiantes = await UpdateEstudianteFinanciera(
//         Number.parseInt(cedula),req.body,req.files);
//     if (estudiantes) {  
//         return res.status(200).json({ succes: true, message: estudiantes })
//     }
//     else {
//         return res.status(401).json({
//             success: false, message: "Error de datos ingresados"
//         })
//     }
// }

export const updateEstudianteResidencia = async (req: Request, res: Response) => {
    const { cedula } = req.params;
    const Estudiante = await UpdateEstudianteResidencia(Number.parseInt(cedula),req.body);
    if (Estudiante) {
        return res.status(200).json({ succes: true, message: Estudiante })
    }
    else {
        return res.status(401).json({
            success: false, message: "Error de datos ingresados"
        })
    }
}

export const createEstudiante =async (req:Request, res:Response) => {
    const Estudiante = await CreateEstudiante(req.body);
    if (Estudiante){
        return res.status(200).json({ succes: true, message: Estudiante })
    }
    return res.status(401).json({success: false, message: "Error de ingreso de datos"})
}