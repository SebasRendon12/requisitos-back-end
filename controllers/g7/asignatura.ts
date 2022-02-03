import { Request, Response } from "express";
import {
  CreateAsignatura,
  GetAsignaturasPendientes,
  UpdateAsignatura,
  GetAsignaturasAprobadas,
  GetAsignaturasCodificadas,
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
  const data = await UpdateAsignatura(req.params, req.body);
  res.status(200).json({
    success: true,
    message: data,
  });
};

export const getAsignaturasAprobadas = async (req: Request, res: Response) => {
  const data = await GetAsignaturasAprobadas();
  res.status(200).json({
    success: true,
    message: data,
  });
};

export const getAsignaturasCodificadas = async (
  req: Request,
  res: Response
) => {
  const data = await GetAsignaturasCodificadas();
  res.status(200).json({
    success: true,
    message: data,
  });
};
