
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const addUser=async(req,res)=>{
    const result=await userModel.create(req.body)
    res.json(result)
}
const showUsers=async(req,res)=>{
    const body = req.body;

    const result=await userModel.find()
    res.json(result)
}
const deleteUser=async(req,res)=>{
    const id=req.params.id
    const result=await userModel.findByIdAndDelete(id)
    res.json(result)
}
const login = async(req,res)=>{
    const {email,password}=req.body
    const user = await userModel.findOne({email})
    if(!user)
    {
        const isMatch = await bcrypt.compare(password,user.password)
        if(isMatch){
            const token = jwt.sign({email:user.email,role:user.role}, "secretkey",{expiresIn:"1h"})
            return res.status(200).json({message : "Login successful",token})
        }
        else{
            return res.status(401).json({message : "Invalid credentials"})
        }
    }
    else
    {
        return res.status(404).json({message : "User not found"})
    }
}
export {addUser,showUsers,deleteUser,login};