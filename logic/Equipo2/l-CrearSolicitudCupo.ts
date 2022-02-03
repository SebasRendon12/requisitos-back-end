import { solicitud_de_cupo } from "../../models/entities";

export const SolicitudCupo = async (body: any) => {
    try {
      const entity = {
        id: '',
        codigo_asignatura: body.codigo_asignatura,
        grupo: body.grupo,
        motivo: body.motivo
      }
      const res = solicitud_de_cupo.build(entity);
      await res.save();
      return res;
    } catch (error) {
      throw (error);
    }
  }
  