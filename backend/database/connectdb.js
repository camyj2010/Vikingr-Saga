import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("db conectada");
} catch (error) {
    console.log("nop" + error);
}