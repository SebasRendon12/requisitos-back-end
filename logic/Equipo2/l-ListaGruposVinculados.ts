import { grupo } from "../../models/entities";

export const GetGrupos = async (codigo_asignatura: string) => {

  const gruposDocente = await grupo.findAll({
    attributes: [ 'id', 'numero_grupo', 'numero_de_cupos', 'salon', 'hora_inicio', 'hora_final', 'dias'],
    where: { codigo_asignatura: codigo_asignatura },
  });
  return gruposDocente;
}