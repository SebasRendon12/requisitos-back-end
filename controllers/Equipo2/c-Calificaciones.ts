import { Request, Response } from "express";
import { DB } from "../../db/connection";
import { GetActividades } from "../../logic/Equipo2/l-Calificaciones";

export const getactividades = async (req: Request, res: Response) => {
    const { codigo_asignatura } = req.params;
    const actividades = await GetActividades(codigo_asignatura);
    if (actividades) {
        res.status(200).json({
            success: true,
            message: actividades
        })
    } else {
        res.status(404).json({
            success: false,
            message: false
        })
    }
}

export const getcalificaciones = async (req: Request, res: Response) => {
    const { id_grupo } = req.params;
    DB.query("select usuario.identificacion, usuario.nombre_completo FROM usuario INNER JOIN calificacion ON usuario.identificacion = calificacion.id_estudiante INNER JOIN actividad on calificacion.id_actividad=actividad.id WHERE calificacion.id_grupo =" + id_grupo + " GROUP BY usuario.identificacion",
        (err: any, rows: any, fields: any) => {
            try {
                res.status(200).json({
                    success: true,
                    message: rows
                })

            } catch (error) {
                console.log(err)
                res.status(404).json({
                    success: false,
                    message: false
                })
            }
        })
}