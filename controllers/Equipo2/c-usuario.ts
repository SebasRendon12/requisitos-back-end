import { Request, Response } from "express";
import { GetUsers, GetUser } from "../../logic/Equipo2/l-usuario";

export const getusers = async (req: Request, res: Response) => {
  const users = await GetUsers();
  res.status(200).json({
    success: true,
    message: users
  })
}

export const getuser = async (req: Request, res: Response) => {
  const { nombre_usuario, contrasena } = req.params;
  const user = await GetUser(String(nombre_usuario),String(contrasena));
  if (user) {
    res.status(200).json({
      success: true,
      message: user
    })
  } else {
    res.status(404).json({
      success: false,
      message: false
    })
  }
}