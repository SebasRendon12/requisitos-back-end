import { Request, Response } from "express";
import { DB } from "../../db/connection";

export const BuscarAsignatura = async (req: Request, res: Response) => {
    const { codigo_asignatura } = req.params;
    DB.query("SELECT asignatura.nivel, asignatura.departamento, asignatura.nombre, asignatura.codigo, asignatura.horas_actividad_presencial, asignatura.horas_actividad_autonomas, asignatura.plan_de_estudios, asignatura.validable, asignatura.porcentaje_de_asistencia, asignatura.tipologia, asignatura.contenido FROM asignatura WHERE asignatura.codigo = "+codigo_asignatura,
        (err: any, rows: any, fields: any) => {
            try {
                if (!err)
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