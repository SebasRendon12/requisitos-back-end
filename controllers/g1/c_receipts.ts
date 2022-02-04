import { Request, Response } from "express";
import { EnableReceipts, GetPeriod } from "../../logic";

export const enableReceipts = async (req: Request, res: Response) => {
  const period = await EnableReceipts();
  res.status(200).json({
    success: true,
    message: period
  })
}

export const getPeriod = async (req: Request, res: Response) => {
  const period = await GetPeriod();
  res.status(200).json({
    success: true,
    message: period
  })
}