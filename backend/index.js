import "dotenv/config";
import "./database/connectdb.js";
import express from "express";

//import cors from "cors";
// import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";

const app = express();

//app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log( "http://localhost:" + PORT));