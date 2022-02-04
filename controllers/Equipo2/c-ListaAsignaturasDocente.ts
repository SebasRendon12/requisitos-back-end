import { Request, Response } from "express";
import { GetAsignaturas } from "../../logic/Equipo2/l-ListaAsignaturasDocente";

export const getasignaturas = async (req: Request, res: Response) => {
    const { id } = req.params;
    const asignaturas = await GetAsignaturas(String(id));
    if (asignaturas) {
      res.status(200).json({
        success: true,
        message: asignaturas
      })
    } else {
      res.status(404).json({
        success: false,
        message: false
      })
    }
  }