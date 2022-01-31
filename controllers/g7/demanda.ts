import { Request, Response } from "express";
import { CreateDemanda } from "../../logic/g7/demanda";

export const createDemanda = async (req: Request, res: Response) => {
  await CreateDemanda(req.body);
  res.status(201).json({
    success: true,
    message: "Demanda Creada",
  });
};
