import { grupo } from "../../models/entities";

export const GetHorario = async (id: number) => {

    const actividades = await grupo.findAll({
        attributes: ['id', 'hora_inicio', 'hora_final', 'dias'],
        where: { id: id }
    });
    return actividades;
}
