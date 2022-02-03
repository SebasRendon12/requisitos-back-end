import { Request, Response } from "express";
import { GetAdmittedByUser, GetFunctionaryByUser, GetStudentByUser } from "../../logic";

export const getStudentByUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await GetStudentByUser(Number(id));
  if (user) {
    res.status(200).json({
      success: true,
      message: user
    })
  } else {
    res.status(404).json({
      success: false,
      message: 'El estudiante no fue encontrado'
    })
  }
}
export const getAdmittedByUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await GetAdmittedByUser(Number(id));
  if (user) {
    res.status(200).json({
      success: true,
      message: user
    })
  } else {
    res.status(404).json({
      success: false,
      message: 'El admitido no fue encontrado'
    })
  }
}
export const getFunctionaryByUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await GetFunctionaryByUser(Number(id));
  if (user) {
    res.status(200).json({
      success: true,
      message: user
    })
  } else {
    res.status(404).json({
      success: false,
      message: 'El funcionario no fue encontrado'
    })
  }
}