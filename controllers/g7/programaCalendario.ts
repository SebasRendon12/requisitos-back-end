import { Request, Response } from "express";
import { CreateProgramaCalendario } from "../../logic/g7/programaCalendario";

export const createProgramaCalendario = async (req: Request, res: Response) => {
  const data = await CreateProgramaCalendario(req.body);
  res.status(200).json({
    success: true,
    message: data,
  });
};
