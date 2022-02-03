import { Request, Response } from "express";
import { DB } from "../../db/connection";
import { GetHorario } from "../../logic/Equipo2/l-DefinirHorario";

export const gethorario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const actividades = await GetHorario(parseInt(id));
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

export const sethorario = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    DB.query("UPDATE `grupo` SET `hora_inicio` = '" + body.hora_inicio + "', `hora_final` = '" + body.hora_final + "', `dias` = '" + body.dias + "' WHERE `grupo`.`id` = " + id)
}