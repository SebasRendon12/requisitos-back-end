import { Request, Response } from "express";
import { DB } from "../../db/connection";

export const getlistaasignaturasdepartamento = async (req: Request, res: Response) => {
    DB.query("SELECT asignatura.codigo, asignatura.nombre FROM asignatura ORDER BY asignatura.codigo",
        (err: any, rows: any, fields: any) => {
            try {
                if (rows)
                    res.status(200).json({
                        success: true,
                        message: rows
                    })
                //res.send(rows);
                else
                    console.log(err)
                res.status(404).json({
                    success: false,
                    message: false
                })
            } catch (error) {

            }
        })
}
