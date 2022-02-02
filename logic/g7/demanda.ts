import { demanda } from "../../models/entities";

export const CreateDemanda = async (body: any) => {
  const data = await demanda.create(body);
  return data;
};

export const GetDemanda = async () => {
  const data = await demanda.findAll();
  return data;
};
