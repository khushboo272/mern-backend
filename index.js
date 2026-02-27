
import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import bycrpt from "bcrypt"
const app=express();
dotenv.config()
const startServer=async()=>{
    try {
        await connectDB();
        
    }
    catch (error) {
        console.log(error)
    }
}
startServer();
app.use(express.json())
app.use("/user",userRouter)
export default app;