
import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
const app=express();
const startServer=async()=>{
    try {
        await connectDB();
        app.listen(8080,()=>{
            console.log("server is running")
        })
    }
    catch (error) {
        console.log(error)
    }
}
startServer();
app.use(express.json())
app.use("/user",userRouter)