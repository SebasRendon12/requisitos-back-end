import { Request, Response } from "express";
import { UpdateProgramacionAcademica } from "../../logic/g7/programacionAcademica";

export const updateProgramacionAcademica = async (
  req: Request,
  res: Response
) => {
  const data = await UpdateProgramacionAcademica(req.params, req.body);
  res.status(200).json({
    success: true,
    message: data,
  });
};
