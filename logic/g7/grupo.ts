import { grupo } from "../../models/entities";

export const CreateGrupo = async (body: any) => {
  const data = await grupo.create(body);
  return data;
};
