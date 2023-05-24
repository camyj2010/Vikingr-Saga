import express from "express";
// import { Router } from "express";
import { login, register } from "../controllers/auth.controler.js";
import {body}from "express-validator"
import { validationResultExpress } from "../middlewares/validationResult.Express.js";
// import {
//     login,
//     register,
//     infoUser,
//     refreshToken,
//     logout,
// } from "../controllers/auth.controller.js";


const router = express.Router();
router.post("/login",[
    body('email', "Formato de email incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "formato de password incorrecto").trim().isLength(3)
    ],validationResultExpress,login);
router.post("/register",
            [
                body('email', "Formato de email incorrecto").trim().isEmail().normalizeEmail(),
                body("password", "formato de password incorrecto").trim().isLength(3)
            ],validationResultExpress,register);

// router.post("/register", register);
// router.post("/login", login);
// router.get("/protected", validateToken, infoUser);
// router.get("/refresh", refreshToken);
// router.get("/logout", logout);

export default router;