import { actividad } from "../../models/entities";

export const CrearActividades = async (body: any) => {
    try {
      const entity = {
        id: '',
        codigo_asignatura: body.codigo_asignatura,
        calificacion_minima: 3,
        nombre: body.nombre,
        porcentaje: body.porcentaje,
        active: true
      }
      const res = actividad.build(entity);
      await res.save();
      return res;
    } catch (error) {
      throw (error);
    }
  }
  