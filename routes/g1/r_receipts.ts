import { Router } from "express";
import { enableReceipts, getPeriod } from "../../controllers";

const router = Router();

router.get("/", [], getPeriod);
router.get("/enable", [], enableReceipts);

export default router;
