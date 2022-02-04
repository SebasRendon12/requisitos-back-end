import { Request, Response } from "express";
import { CreatePrueba } from "../../logic/g7/prueba";

export const createPrueba = async (req: Request, res: Response) => {
  const data = await CreatePrueba(req.body);
  res.status(200).json({
    success: true,
    message: data,
  });
};
