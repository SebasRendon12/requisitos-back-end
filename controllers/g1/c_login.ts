import { Request, Response } from "express";
import { SignIn } from "../../logic";

export const signIn = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const user = await SignIn(body.nombre_usuario, body.contrasena);
    if (user !== null) {
      res.status(200).json({
        success: true,
        message: user
      })
    } else {
      res.status(200).json({
        success: false,
        message: 'Usuario o contraseña inválido(s)'
      })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error, porfavor comuniquese con el administrador'
    })
  }
}