import { Request, Response } from "express";
import { GetGrupos } from "../../logic/Equipo2/l-ListaGruposVinculados";

export const getgrupos = async (req: Request, res: Response) => {
    const { codigo_asignatura } = req.params;
    const grupos = await GetGrupos(String(codigo_asignatura));
    if (grupos) {
      res.status(200).json({
        success: true,
        message: grupos
      })
    } else {
      res.status(404).json({
        success: false,
        message: false
      })
    }
  }