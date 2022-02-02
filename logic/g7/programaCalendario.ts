import { programa_calendario } from "../../models/entities";

export const CreateProgramaCalendario = async (body: any) => {
  const data = await programa_calendario.create(body);
  return data;
};
