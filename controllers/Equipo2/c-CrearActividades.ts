import { Request, Response } from "express";
import { CrearActividades } from "../../logic/Equipo2/l-CrearActividades";

export const crearactividades = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      const user = await CrearActividades(body);
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