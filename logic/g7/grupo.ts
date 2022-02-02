import { grupo } from "../../models/entities";

export const CreateGrupo = async (body: any) => {
  const data = await grupo.create(body);
  return data;
};
export const UpdateGrupo = async (params: any, body: any) => {
  const codigo = params.id;
  const data = await grupo.update(body, {
    where: { codigo: codigo },
  });
  console.log(data);
  return data;
};
