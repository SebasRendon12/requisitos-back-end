import { Request, Response } from "express";
import { CrearGrupo } from "../../logic/Equipo2/l-CrearGrupo";

export const creargrupo = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      const user = await CrearGrupo(body);
      res.status(200).json({
        success: true,
        message: user
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error, porfavor comuniquese con el administrador'
      })
    }
  }