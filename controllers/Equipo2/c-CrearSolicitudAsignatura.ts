import { Request, Response } from "express";
import { SolicitudAsignatura } from "../../logic/Equipo2/l-CrearSolicitudAsignatura";

export const solicitudasignatura = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      const user = await SolicitudAsignatura(body);
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