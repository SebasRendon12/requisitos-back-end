import { Request, Response } from "express";
import { GetEstudiante,GetEstudiantes,
    UpdateEstudianteFinanciera,UpdateEstudianteResidencia, CreateEstudiante } from "../../logic";


export const getEstudiante = async (req: Request, res: Response) => {
    const { id } = req.params;
    const estudiante = await GetEstudiante(id);
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

export const updateEstudianteFinanciera = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const estudiantes = await UpdateEstudianteFinanciera(
            Number.parseInt(id),req.body,req.files);
        if (estudiantes) {  
            return res.status(200).json({ succes: true, message: estudiantes })
        }
        else {
            return res.status(401).json({
                success: false, message: "Error de datos ingresados o no ingresó los archivos"
            })
        }
    } catch (error) {
        return res.status(500).json({ succes: true, message: error })
    }
    
}

export const updateEstudianteResidencia = async (req: Request, res: Response) => {
    const { identificacion } = req.params;
    const Estudiante = await UpdateEstudianteResidencia(Number.parseInt(identificacion),req.body);
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
    var Estudiante = null;
    try {
        Estudiante = await CreateEstudiante(req.body);
    } catch (error) {
        return res.status(500).json({ succes: false, message: error })
    }
    
    if (Estudiante){
        return res.status(200).json({ succes: true, message: Estudiante })
    }
    return res.status(401).json({success: false, message: "Error de ingreso de datos o el estudiante ya existe"})
}