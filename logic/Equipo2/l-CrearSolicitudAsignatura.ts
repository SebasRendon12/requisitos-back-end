import { solicitud_asignatura } from "../../models/entities";

export const SolicitudAsignatura = async (body: any) => {
    try {
      const entity = {
        id: null,
        fecha: new Date().getDate().toLocaleString(),
        id_docente: body.id_docente,
        tipo: body.tipo,
        nombre_asignatura: body.nombre_asignatura,
        nivel: body.nivel,
        archivos: body.archivos,
        motivo: body.motivo,
        aprobacion_comite: null,
        aprobacion_consejo: null,
        aprobacion_director: null
      }
      const res = solicitud_asignatura.build(entity);
      await res.save();
      return res;
    } catch (error) {
      throw (error);
    }
  }
  