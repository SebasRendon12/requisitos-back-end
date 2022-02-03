import { Request, Response, } from "express";
import { signinEstudiante, signinFuncionario } from "../../logic";

export const loginEstudiante = async (req: Request, res: Response) => {
    const estudiate_body = req.body;
    
    const estudiante = await signinEstudiante(estudiate_body.usuario, estudiate_body.contrasena);
    if (estudiante) {
        res.status(200).json({ succes: true, message: estudiante })
    }
    else {
        res.status(401).json({
            success: false,
            message: "Error de datos ingresados"
        })
    }
}

//@ts_ignore
export const loginFuncionario = async (req: Request, res: Response) => {
    
    const user = req.body;
    const funcionario = await signinFuncionario(user.usuario, user.contrasena);
    if (funcionario) {
        return res.status(200).json({ succes: true, message: funcionario })
    }
    else {
        return res.status(401).json({
            success: false, message: "Error de datos ingresados"
        })
    }
}