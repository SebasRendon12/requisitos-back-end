import { programa_asignatura } from "../../models/entities";

export const CreateProgramaAsignatura = async (body: any) => {
  const data = await programa_asignatura.create(body);
  return data;
};
