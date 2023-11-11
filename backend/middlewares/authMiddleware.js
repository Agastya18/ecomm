import JWT from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protect = (req, res, next) => {
      try {
        const decoded = JWT.verify(req.headers.authorization, process.env.JWT_Secret);
        console.log(decoded);
        if(!decoded)
        {
            return res.status(401).json({
                success:false,
                message:"unauthorized user"
            })
        }
        req.user = decoded;
        console.log(req.user);

       next();
      } catch (error) {
        console.log(error);
      }
}

export const isAdmin = async(req, res, next) => {
   const user =  await User.findById(req.user.id);
   console.log(user);
   try {
    if(user.role === 1)
    {
        next();
    }
    else{
        return res.status(401).json({
            success:false,
            message:"unauthorized admin access user"
        })
    }
   } catch (error) {
    console.log(error);
   }
}