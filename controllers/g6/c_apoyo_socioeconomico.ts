import { Request, Response } from "express";
import { GetApoyoSocioEconomico,GetApoyoSocioEconomicos,
    UpdateApoyoSocioEconomico,AsignarApoyoSocioEconomicoEstudiante,
    QuitarApoyoSocioEconomicoEstudiante,CreateApoyoSocioEconomico } from "../../logic";


export const getApoyoSocioEconomico = async (req: Request, res: Response) => {
    const { id_apoyo } = req.params;
    const apoyo = await GetApoyoSocioEconomico(Number.parseInt(id_apoyo));
    if (apoyo) {
        res.status(200).json({ succes: true, message: apoyo })
    }
    else {
        res.status(401).json({
            success: false,
            message: "apoyo no existe no existe"
        })
    }
}

export const getApoyoSocioEconomicos = async (req: Request, res: Response) => {
    const apoyos = await GetApoyoSocioEconomicos();
    if (apoyos) {
        return res.status(200).json({ succes: true, message: apoyos })
    }
    else {
        return res.status(401).json({
            success: false, message: "Error de datos ingresados"
        })
    }
}

export const updateApoyoSocioEconomico = async (req: Request, res: Response) => {
    const { id_apoyo } = req.params;
    const apoyo = await UpdateApoyoSocioEconomico(Number.parseInt(id_apoyo),req.body);
    if (apoyo) {  
        return res.status(200).json({ succes: true, message: apoyo })
    }
    else {
        return res.status(401).json({
            success: false, message: "Error de datos ingresados"
        })
    }
}

// export const asignarApoyoSocioEconomico = async (req: Request, res: Response) => {
//     const { id_apoyo,cedula,id_funcionario } = req.params;
//     const apoyo = await AsignarApoyoSocioEconomicoEstudiante(id_apoyo,cedula,id_funcionario);
//     if (apoyo) {  
//         return res.status(200).json({ succes: true, message: apoyo })
//     }
//     else {
//         return res.status(401).json({
//             success: false, message: "Error de datos ingresados"
//         })
//     }
// }