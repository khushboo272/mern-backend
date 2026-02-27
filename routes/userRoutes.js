
import {addUser,deleteUser,showUsers,login,update} from "../controllers/userController.js";
import express from "express";
import { authMiddleware,authorize } from "../middleware/auth.js";
const userRouter=express.Router();
userRouter.get("/",showUsers)
userRouter.post("/adduser",addUser)
userRouter.delete("/deleteuser/:id",deleteUser)
userRouter.post("/login",login)
userRouter.patch("/:id",update)
export default userRouter;