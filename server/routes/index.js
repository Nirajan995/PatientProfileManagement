import { Router } from "express";

import userRouter from "./user.route.js";
import patientRouter from "./patient.route.js";

const router = Router();

router.use(userRouter);
router.use(patientRouter);

export default router;