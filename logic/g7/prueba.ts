import { actividad } from "../../models/entities";

export const CreatePrueba = async (body: any) => {
  const data = await actividad.create(body);
  return data;
};
