import { Request, Response } from "express";
import { GetFucionario,GetFucionarios,UpdateFuncionario } from "../../logic";


export const getFucionario = async (req: Request, res: Response) => {
    const { cedula } = req.params;
    const estudiante = await GetFucionario(Number.parseInt(cedula));
    if (estudiante) {
        res.status(200).json({ succes: true, message: estudiante })
    }
    else {
        res.status(401).json({
            success: false,
            message: "FUncionario no existe"
        })
    }
}

export const getFucionarios = async (req: Request, res: Response) => {
    const Funcionarios = await GetFucionarios();
    if (Funcionarios) {
        return res.status(200).json({ succes: true, message: Funcionarios })
    }
    else {
        return res.status(401).json({
            success: false, message: "Error de datos ingresados"
        })
    }
}

export const updateFuncionario = async (req: Request, res: Response) => {
    const { cedula } = req.params;
    const Funcionario = await UpdateFuncionario(
        Number.parseInt(cedula),req.body);
    if (Funcionario) {  
        return res.status(200).json({ succes: true, message: Funcionario })
    }
    else {
        return res.status(401).json({
            success: false, message: "Error de datos ingresados"
        })
    }
}
