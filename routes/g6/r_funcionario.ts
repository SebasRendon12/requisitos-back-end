import { Router } from "express";
import { getFucionario, getFucionarios,updateFuncionario } from "../../controllers/g6/c_funcionario";
import { ValidateFields } from "../../middlewares";

const router = Router();

router.get("/", getFucionarios);

router.get("/:id", getFucionario);

router.put("/:id",[ValidateFields],updateFuncionario);


export default router;