import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/authUtils.js";
import JWT from "jsonwebtoken";
export const register =async (req,res)=>{
    try {
        const {name,email, password,phone,address} = req.body;
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
        if(!password)
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
       const hashedPassword = await hashPassword(password);
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
        const {email, password} = req.body;
        if(!email || !password)
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
        const matchPassword = await comparePassword(password,existingUser.password);
        if(!matchPassword)
        {
            return res.status(400).json({
                success:false,
                message:"password or email  is not correct"
            })
        
        }
        //token generation
        const token =  JWT.sign({id:existingUser._id},process.env.JWT_Secret,{expiresIn:"7d"});
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