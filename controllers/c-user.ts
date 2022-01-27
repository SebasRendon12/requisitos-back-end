import { Request, Response } from "express";
import { GetUsers, GetUser, SaveUser, EditUser, DeleteUser } from "../logic";

export const getusers = async (req: Request, res: Response) => {
  const users = await GetUsers();
  res.status(200).json({
    success: true,
    message: users
  })
}

export const getuser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await GetUser(Number(id));
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

export const saveuser = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const user = await SaveUser(body);
    res.status(200).json({
      success: true,
      message: user
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error, porfavor comuniquese con el administrador'
    })
  }
}

export const edituser = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  try {
    const user = await EditUser(body, Number(id));
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'El usuario no fue encontrado'
      })
    }
    res.status(200).json({
      success: true,
      message: user
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error, porfavor comuniquese con el administrador'
    })
  }
}

export const deleteuser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await DeleteUser(Number(id));
  if (!user) {
    res.status(404).json({
      success: false,
      message: 'El usuario no fue encontrado'
    })
  }
  res.status(200).json({
    success: true,
    message: 'Usuario eliminado'
  })
}