import express from "express";

import auth from "../middlewares/auth.middleware.js";
import { getPatient, getPatientById, addPatient, updatePatient, removePatient } from "../controllers/patient.controller.js";

import { upload } from "../middlewares/multer.middleware.js"

const router = express.Router();

router.get("/patient", auth, getPatient);
router.get("/patient/:id", auth, getPatientById);
router.post("/patient", auth, upload.single("image"), addPatient);
router.put("/patient/:id", auth, updatePatient);
router.delete("/patient/:id", auth, removePatient);

export default router;