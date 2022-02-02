import { Request, Response, } from "express";
import express from "express"
import { signinEstudiante, signinFuncionario } from "../../logic";

interface MulterFile {
    key: string // Available using `S3`.
    path: string // Available using `DiskStorage`.
    mimetype: string
    originalname: string
    size: number
  }

export const loginEstudiante = async (req: Request & { files: MulterFile[] }, res: Response) => {
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
export const loginFuncionario = async (req: Request & { files: MulterFile[] }, res: Response) => {
    
    console.log(req.files)
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