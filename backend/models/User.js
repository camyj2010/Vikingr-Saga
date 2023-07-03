import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true },
    },
    password: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: false,
        unique: false,
    },
    progress: {
        type: Number,
        required: false,
    },
    lesson1: {
        type: Boolean,
        default: false,
    },
    lesson2: {
        type: Boolean,
        default: false,
    },
    lesson3: {
        type: Boolean,
        default: false,
    },
    lesson4: {
        type: Boolean,
        default: false,
    },
    avatar: {
        type: String,
        default: "man",
    },
    image: {
        type: Number,
        default: 1,
    },


});


userSchema.pre("save", async function(next) {
    const user = this;


    if (!user.isModified("password")) return next();


    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        console.log(error);
        throw new Error("Error al codificar la contraseña");
    }
});


userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};


export const User = mongoose.model("User", userSchema);