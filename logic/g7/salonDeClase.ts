import { salon_de_clase } from "../../models/entities";

export const CreateSalonDeClase = async (body: any) => {
  const data = await salon_de_clase.create(body);
  return data;
};
