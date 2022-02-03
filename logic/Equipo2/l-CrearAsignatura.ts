import { asignatura } from "../../models/entities";

export const CrearAsignatura = async (body: any) => {
    try {
      const entity = {
        codigo: body.codigo, 
        nivel: body.nivel,
        departamento: body.departamento,
        nombre: body.nombre,
        horas_actividad_presencial: body.horas_actividad_presencial,
        horas_actividad_autonomas: body.horas_actividad_autonomas,
        plan_de_estudios: body.plan_de_estudios,
        validable: body.validable,
        porcentaje_de_asistencia: body.porcentaje_de_asistencia,
        tipologia: body.tipologia,
        contenido: body.contenido,
        en_oferta: '',
        codigo_requisitos: body.codigo_requisitos,
        tipo_requisitos: body.tipo_requisitos,
        objetivo_de_formacion: body.objetivo_de_formacion,
        creditos: '',
        bibliografia_minima: body.bibliografia_minima,
        metodologia: body.metodologia,
        distribucion_de_temas: '',
        modalidad: '',
        restriccion: '',
        descripcion: body.descripcion,
        fk_programacion_academica: '',
        aprobacion_director: ''
      }
      const res = asignatura.build(entity);
      await res.save();
      return res;
    } catch (error) {
      throw (error);
    }
  }