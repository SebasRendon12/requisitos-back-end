import { Request, Response } from "express";
import {
  CreateAsignatura,
  GetAsignaturasPendientes,
  UpdateAsignatura,
} from "../../logic/g7/asignatura";

export const createAsignatura = async (req: Request, res: Response) => {
  const data = await CreateAsignatura(req.body);
  res.status(200).json({
    success: true,
    message: data,
  });
};

export const getAsignaturasPendientes = async (req: Request, res: Response) => {
  const data = await GetAsignaturasPendientes();
  res.status(200).json({
    success: true,
    message: data,
  });
};

export const updateAsignatura = async (req: Request, res: Response) => {
  const data = await UpdateAsignatura(req.body);
  res.status(200).json({
    success: true,
    message: data,
  });
};
