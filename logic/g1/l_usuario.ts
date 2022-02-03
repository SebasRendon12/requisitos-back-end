import { admitido, estudiante, funcionario } from "../../models/entities";

export const GetStudentByUser = async (id: number) => {
  const student = await estudiante.findOne({
    attributes: ['id',
      'fecha_nacimiento',
      'correo',
      'celular',
      'direccion',
      'estrato',
      'calidad',
      'sede_id',
      'usuario_id'],
    where: {
      usuario_id: id
    }
  });
  if (student) {
    return student;
  } else {
    return null;
  }
}

export const GetAdmittedByUser = async (id: number) => {
  const admitted = await admitido.findOne({
    attributes: ['id',
      'usuario_id'],
    where: {
      usuario_id: id
    }
  });
  if (admitted) {
    return admitted;
  } else {
    return null;
  }
}

export const GetFunctionaryByUser = async (id: number) => {
  const functionary = await funcionario.findOne({
    attributes: ['id',
      'fecha_nacimiento',
      'permiso',
      'division_registro_y_matricula_id',
      'usuario_id'],
    where: {
      usuario_id: id
    }
  });
  if (functionary) {
    return functionary;
  } else {
    return null;
  }
}