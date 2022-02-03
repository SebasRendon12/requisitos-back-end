import { Request, Response } from "express";
import { DB } from "../../db/connection";

export const getgrupos = async (req: Request, res: Response) => {
    const { codigo_asignatura } = req.params;
    DB.query("SELECT grupo.id, usuario.nombre_completo, grupo.numero_grupo, grupo.numero_de_cupos, grupo.salon, grupo.hora_inicio, grupo.hora_final, grupo.dias FROM grupo INNER JOIN usuario on grupo.id_docente = usuario.identificacion WHERE grupo.codigo_asignatura = " + codigo_asignatura,
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