import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/authUtils.js";
import JWT from "jsonwebtoken";
export const register =async (req,res)=>{
    try {
        const {name,email, pass,phone,address} = req.body;
        console.log(name, email, pass,phone,address);
        if(!name)
        {
            return res.status(400).json({
                success:false,
                message:"name is required"
            })
        
        }
        if(!email)
        {
            return res.status(400).json({
                success:false,
                message:"email is required"
            })
        
        }
        if(!pass)
        {
            return res.status(400).json({
                success:false,
                message:"password is required"
            })
        
        }
        if(!phone)
        {
            return res.status(400).json({
                success:false,
                message:"phone is required"
            })
        
        }
        if(!address)
        {
            return res.status(400).json({
                success:false,
                message:"address is required"
            })
        
        }
        // existing user check
        const existingUser= await User.findOne({email});
        if(existingUser)
        {
            return res.status(400).json({
                success:false,
                message:"email is taken"
            })
        
        }
        //register user
       const hashedPassword = await hashPassword(pass);
        const user= new User({name,email,password:hashedPassword,phone,address});
        await user.save();
        res.status(200).json({
            success:true,
            message:"register success",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"register failed"
        })
    }
}


// Login user
export const login =async (req,res)=>{
      try {
        const {email, pass} = req.body;
        if(!email || !pass)
        {
            return res.status(400).json({
                success:false,
                message:"email or password is required"
            })
        
        }
       
        // existing user check
        const existingUser= await User.findOne({email});
        if(!existingUser)
        {
            return res.status(400).json({
                success:false,
                message:"email is not registered"
            })
        
        }
        //check password
        const matchPassword = await comparePassword(pass,existingUser.password);
        if(!matchPassword)
        {
            return res.status(400).json({
                success:false,
                message:"password or email  is not correct"
            })
        
        }
        //token generation
        const token =  JWT.sign({id:existingUser._id},process.env.JWT_Secret,{expiresIn:"1h"});
        res.status(200).json({
            success:true,
            message:"login success",
            existingUser,
            token
        })
      } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"login failed"
        })
      }
}
// test
export const test = (req,res)=>{
    res.status(200).json({
        success:true,
        message:"protected route",
    })
}