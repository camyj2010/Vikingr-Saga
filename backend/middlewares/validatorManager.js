import { validationResult,body  } from "express-validator";
// import { validationResultExpress } from "../middlewares/validationResult.Express.js";
export const validationResultExpress=(req, res, next)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    next()
}
export const bodyLoginValidator=[
    body('email', "Formato de email incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "formato de password incorrecto").trim().isLength(3)
    ,validationResultExpress];
export const bodyRegisterValidator=[
        body('email', "Formato de email incorrecto").trim().isEmail().normalizeEmail(),
        body("password", "formato de password incorrecto").trim().isLength(3)
        ,validationResultExpress
];
    