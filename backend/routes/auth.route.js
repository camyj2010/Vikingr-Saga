import express from "express";
// import { Router } from "express";
import { login, register, loginGoogle } from "../controllers/auth.controler.js";
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

// router.post("/register", register);
// router.post("/login", login);
// router.get("/protected", validateToken, infoUser);
// router.get("/refresh", refreshToken);
// router.get("/logout", logout);

export default router;