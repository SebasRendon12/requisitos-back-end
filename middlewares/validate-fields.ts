import { validationResult } from "express-validator";

export const ValidateFields = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      success: false,
      message: errors
    })
  }
  next();
}