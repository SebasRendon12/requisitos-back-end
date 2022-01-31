import { Request, Response } from "express";
import { CreateGrupo } from "../../logic/g7/grupo";

export const createGrupo = async (req: Request, res: Response) => {
  const data = await CreateGrupo(req.body);
  res.status(201).json({
    success: true,
    message: data,
  });
};
