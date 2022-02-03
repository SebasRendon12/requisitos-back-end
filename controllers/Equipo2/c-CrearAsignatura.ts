import { Request, Response } from "express";
import { CrearAsignatura } from "../../logic/Equipo2/l-CrearAsignatura"; 

export const crearasignatura = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      const user = await CrearAsignatura(body);
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