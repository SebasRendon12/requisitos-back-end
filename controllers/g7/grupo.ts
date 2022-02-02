import { Request, Response } from "express";
import { CreateGrupo, UpdateGrupo } from "../../logic/g7/grupo";

export const createGrupo = async (req: Request, res: Response) => {
  const data = await CreateGrupo(req.body);
  res.status(201).json({
    success: true,
    message: data,
  });
};

export const updateGrupo = async (req: Request, res: Response) => {
  const data = await UpdateGrupo(req.params, req.body);
  res.status(201).json({
    success: true,
    message: data,
  });
};
