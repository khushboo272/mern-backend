
import {addUser,deleteUser,showUsers} from "../controllers/userController.js";
import express from "express";
const userRouter=express.Router();
userRouter.get("/showusers",showUsers)
userRouter.post("/adduser",addUser)
userRouter.delete("/deleteuser/:id",deleteUser)
export default userRouter;