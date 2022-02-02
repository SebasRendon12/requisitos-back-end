import { Request, Response } from "express";
import { CreateSalonDeClase } from "../../logic/g7/salonDeClase";

export const createSalonDeClase = async (req: Request, res: Response) => {
  const data = await CreateSalonDeClase(req.body);
  res.status(200).json({
    success: true,
    message: data,
  });
};
