import { asignatura } from "../../models/entities";

export const CreateAsignatura = async (body: any) => {
  const data = await asignatura.create(body);
  return data;
};
export const GetAsignaturasPendientes = async () => {
  const data = await asignatura.findAll({
    where: { aprobacion_director: false },
  });
  return data;
};
export const UpdateAsignatura = async (params: any, body: any) => {
  const codigo = params.id;
  const data = await asignatura.update(body, {
    where: { codigo: codigo },
  });
  console.log(data);
  return data;
};
export const GetAsignaturasAprobadas = async () => {
  const data = await asignatura.findAll({
    where: { aprobacion_director: true },
  });
  return data;
};

export const GetAsignaturasCodificadas = async () => {
  const data = await asignatura.findAll({
    where: { aprobacion_director: null },
  });
  return data;
};
