import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/applicationController.js";

const router = express.Router();


router.route("/apply/:id").get( isAuthenticated ,applyJob);      // router.post("/register" , register);
router.route("/get").get(isAuthenticated , getAppliedJobs);
router.get("/:id/applicants", isAuthenticated , getApplicants);
router.route("/status/:id/update").post( isAuthenticated , updateStatus );

export default router;