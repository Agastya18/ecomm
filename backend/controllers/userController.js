import User from "../models/userModel.js";
import { hashPassword } from "../utils/authUtils.js";

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