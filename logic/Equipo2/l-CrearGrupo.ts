import { grupo } from "../../models/entities";

export const CrearGrupo = async (body: any) => {
    try {
      const entity = {
        id: '',
        codigo_asignatura: body.codigo_asignatura,
        id_docente: body.id_docente,
        numero_grupo: body.numero_grupo,
        numero_de_cupos: body.numero_de_cupos,
        salon: body.salon,
        hora_inicio: body.hora_inicio,
        hora_final: body.hora_final,
        dias: body.dias
      }
      const res = grupo.build(entity);
      await res.save();
      return res;
    } catch (error) {
      throw (error);
    }
  }
  