import {User} from "../models/User.js"
export const login =async(req,res)=>{
    const {email, password}=req.body
    try{
        
        let user= await User.findOne({email:email})
        if(!user)
            return res.status(403).json({acceso:false,error:"No existe el usuario registrado"});
        
        const respuestaPassword=await user.comparePassword(password)
        if(!respuestaPassword)
            return res.status(403).json({acceso:false,error:"Contraseña incorrecta"});
        //Generar el token 
        const userId = user.id;
         
        return res.json({acceso:true, message:"Entro", userid:userId, userNickname:user.nickname});
    }
    catch(error){
        console.log(error)
        return res.status(500).json({acceso:false,error:"error de servidor"});
    }

   
};

export const register =async(req,res)=>{
   const {email, password, nickname}=req.body
   try{
        
        //verificar si ya existe este usuario 
        let user= await User.findOne({email:email})
        if(user) throw({code:11000})
        let nickuser= await User.findOne({nickname:nickname})
        if(nickuser) return res.status(403).json({ok:false,error:"Ya existe ese nombre de usuario"});
        user=new User ({email: email, password:password, nickname:nickname, progress:0});
        await user.save()

        return res.json({ok:true})
   }
   catch(error){
    console.log(error)
    if(error.code===11000){
        return res.status(400).json({ok:false,error:"Ya existe este email"})
    }
    return res.status(500).json({ok:false,error:"error de servidor"})
   }
    // console.log(req.body);
    res.json({ok:true});
};