import { Request, Response } from "express";
import { DB } from "../../db/connection";

export const getasignaturassolicitud = async (req: Request, res: Response) => {
    DB.query("SELECT solicitud_de_cupo.codigo_asignatura, asignatura.nombre FROM solicitud_de_cupo INNER JOIN asignatura on solicitud_de_cupo.codigo_asignatura = asignatura.codigo GROUP by solicitud_de_cupo.codigo_asignatura;",
        (err: any, rows: any, fields: any) => {
            try {
                res.status(200).json({
                    success: true,
                    message: rows
                })
                //res.send(rows);

            } catch (error) {
                console.log(err)
                res.status(404).json({
                    success: false,
                    message: false
                })
            }
        })
}

export const getsolicitudescupo = async (req: Request, res: Response) => {
    const { codigo_asignatura } = req.params;
    DB.query("SELECT solicitud_de_cupo.id, solicitud_de_cupo.grupo, solicitud_de_cupo.motivo FROM solicitud_de_cupo WHERE solicitud_de_cupo.codigo_asignatura = " + codigo_asignatura,
        (err: any, rows: any, fields: any) => {
            try {
                res.status(200).json({
                    success: true,
                    message: rows
                })
                //res.send(rows);

            } catch (error) {
                console.log(err)
                res.status(404).json({
                    success: false,
                    message: false
                })
            }
        })
}

export const deletesolicitudescupo = async (req: Request, res: Response) => {
    const { id } = req.params;
    DB.query("DELETE FROM `solicitud_de_cupo` WHERE `solicitud_de_cupo`.`id` = " + id)
}