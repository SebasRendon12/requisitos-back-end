import { Request, Response } from "express";
import { GetSession } from "../../logic";

export const getSesionController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await GetSession(Number(id));
  if (user) {
    res.status(200).json({
      success: true,
      message: user
    })
  } else {
    res.status(404).json({
      success: false,
      message: 'El usuario no fue encontrado'
    })
  }
}