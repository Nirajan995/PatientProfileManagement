import { Router } from "express";
import { loginUser, signupUser } from "../controllers/user.controller.js";

const router = Router();

router.post("/signup", signupUser);
router.post("/signin", loginUser);

export default router;