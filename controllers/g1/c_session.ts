import { Request, Response } from "express";
import { DeleteSessions, GetSession, SaveSession } from "../../logic";

export const getSesionController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const session = await GetSession(Number(id));
  if (session) {
    res.status(200).json({
      success: true,
      message: session
    })
  } else {
    res.status(200).json({
      success: true,
      message: false
    })
  }
}

export const saveSessionController = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const session = await SaveSession(body);
    res.status(200).json({
      success: true,
      message: session
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error, porfavor comuniquese con el administrador'
    })
  }
}

export const deleteSesionController = async (req: Request, res: Response) => {
  const { usuario_id } = req.params;
  const session = await DeleteSessions(Number(usuario_id));
  if (session) {
    res.status(200).json({
      success: true,
      message: 'Sesión cerrada'
    })
  } else {
    res.status(200).json({
      success: false,
      message: 'La sesión no fue encontrada'
    })
  }
}