import { Router } from "express";
import { getAdmittedByUser, getFunctionaryByUser, getStudentByUser } from "../../controllers";

const router = Router();

router.get("/student/:id", [], getStudentByUser);
router.get("/admitted/:id", [], getAdmittedByUser);
router.get("/functionary/:id", [], getFunctionaryByUser);

export default router;