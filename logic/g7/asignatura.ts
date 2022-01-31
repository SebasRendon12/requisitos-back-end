import { asignatura } from "../../models/entities";

export const CreateAsignatura = async (body: any) => {
  const users = await asignatura.create(body);
  return users;
};
export const GetAsignaturasPendientes = async () => {
  const users = await asignatura.findAll({
    where: { aprobacion_director: false },
  });
  return users;
};
export const UpdateAsignatura = async (body: any) => {
  const users = await asignatura.update(body, {
    where: { codigo: body.codigo },
  });
  return users;
};
