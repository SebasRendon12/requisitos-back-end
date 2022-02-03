import { proyeccion } from "../../models/entities";

export const GetProyeccion = async () => {
  const users = await proyeccion.findAll({});
  return users;
};

export const ReviewProyeccion = async (body: any) => {
  const users = await proyeccion.update(body, { where: { id: 1 } });
  return users;
};
