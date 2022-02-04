import { Request, Response } from "express";
import { CreateProgramaAsignatura } from "../../logic/g7/programaAsignatura";

export const createProgramaAsignatura = async (req: Request, res: Response) => {
  const data = await CreateProgramaAsignatura(req.body);
  res.status(200).json({
    success: true,
    message: data,
  });
};
