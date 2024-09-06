import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/companyController.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();


router.route("/register").post( isAuthenticated ,registerCompany);      // router.post("/register" , register);
router.route("/get").get(isAuthenticated , getCompany);
router.get("/get/:id", isAuthenticated ,getCompanyById);
router.route("/update/:id").put( isAuthenticated , singleUpload , updateCompany);

export default router;