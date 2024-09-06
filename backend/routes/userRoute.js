import express from "express";
import { login, logout, register, updateProfile } from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();


router.route("/register").post( singleUpload ,register);      // router.post("/register" , register);
router.route("/login").post(login);
router.get("/logout", logout);
router.route("/profile/update").post( isAuthenticated , singleUpload , updateProfile);

export default router;