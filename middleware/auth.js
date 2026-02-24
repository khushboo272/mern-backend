import jwt from "jsonwebtoken";
const authMiddleware=(req,res,next)=>{
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    try
    {
        const user = jwt.verify(token, "secretkey");
        req.user=user;
        next();

    }
    catch(err)
    {
        console.log(err);
        res.status(401).json({message:"invalid token"});
    }
    
    
};

const authorize=(...roles)=>
{
    return (req,res,next)=>{
        if(roles.includes(req.user.role))
        {
            next();
        }
        else
        {
            return res.status(403).json({message:"forbidden"});
        }
    }

};
export {authMiddleware,authorize};