
import {addUser,deleteUser,showUsers,login,update} from "../controllers/userController.js";
import express from "express";
import { authMiddleware,authorize } from "../middleware/auth.js";
const userRouter=express.Router();
userRouter.get("/",showUsers)
userRouter.post("/adduser",authMiddleware,authorize("admin"),addUser)
userRouter.delete("/deleteuser/:id",authMiddleware,authorize("admin"),deleteUser)
userRouter.post("/login",login)
userRouter.patch("/:id",update)
export default userRouter;