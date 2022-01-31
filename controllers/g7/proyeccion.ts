import { Request, Response } from "express";
import { GetProyeccion, ReviewProyeccion } from "../../logic/g7/proyeccion";

export const getProyeccion = async (req: Request, res: Response) => {
  const proyeccion = await GetProyeccion();
  res.status(200).json({
    success: true,
    message: proyeccion,
  });
};

export const reviewProyeccion = async (req: Request, res: Response) => {
  const proyeccion = await ReviewProyeccion(req.body);
  res.status(200).json({
    success: true,
    message: proyeccion,
  });
};
