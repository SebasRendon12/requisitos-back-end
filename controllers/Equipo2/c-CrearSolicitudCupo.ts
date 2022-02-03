import { Request, Response } from "express";
import { SolicitudCupo } from "../../logic/Equipo2/l-CrearSolicitudCupo"; 

export const solicitudcupo = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      const user = await SolicitudCupo(body);
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