import express from "express";
// import { Router } from "express";
import { login, register, loginGoogle,checkLesson1Progress,checkLesson2Progress,
    checkLesson3Progress,checkLesson4Progress,getUserInfo } from "../controllers/auth.controler.js";
import {body}from "express-validator"
import { validationResultExpress } from "../middlewares/validationResult.Express.js";
import { bodyLoginValidator, bodyRegisterValidator } from "../middlewares/validatorManager.js";
// import {
//     login,
//     register,
//     infoUser,
//     refreshToken,
//     logout,
// } from "../controllers/auth.controller.js";


const router = express.Router();
router.post("/login",bodyLoginValidator,login);
router.post("/register",bodyRegisterValidator,register);
router.post("/login-google",loginGoogle);
router.get("/Lesson1_Quiz/:userId", checkLesson1Progress);
router.get("/Lesson2_Quiz/:userId", checkLesson2Progress);
router.get("/Lesson3_Quiz/:userId", checkLesson3Progress);
router.get("/Lesson4_Quiz/:userId", checkLesson4Progress);
router.get("/user/:userId", getUserInfo);

// router.post("/register", register);
// router.post("/login", login);
// router.get("/protected", validateToken, infoUser);
// router.get("/refresh", refreshToken);
// router.get("/logout", logout);

export default router;