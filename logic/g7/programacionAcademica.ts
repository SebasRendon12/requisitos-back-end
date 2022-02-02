import { programacion_academcia } from "../../models/entities";

export const UpdateProgramacionAcademica = async (params: any, body: any) => {
  const id = params.id;
  const data = await programacion_academcia.update(body, {
    where: { id: id },
  });
  console.log(data);
  return data;
};
