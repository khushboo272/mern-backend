
import {addUser,deleteUser,showUsers,login} from "../controllers/userController.js";
import express from "express";
import { authMiddleware,authorize } from "../middleware/auth.js";
const userRouter=express.Router();
userRouter.get("/showusers",authMiddleware,showUsers)
userRouter.post("/adduser",authMiddleware,authorize("admin"),addUser)
userRouter.delete("/deleteuser/:id",authMiddleware,authorize("admin"),deleteUser)
userRouter.post("/login",login)
export default userRouter;