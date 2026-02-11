const jwt = require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    let token;
    const authHeader = req.headers.authentication || req.headers.Authentication;
    if(authHeader && authHeader.startsWith("Bearer")){
        token= authHeader.split(" ")[1];
        if(!token){
            res.status(401).json({message:"token not found, access denied"});
        }

        try{
            let decode = jwt.verify(token,process.env.JWT_SECRET)
            req.user=decode;

            console.log("decode user is", req.user);
            next();

        }catch(err){
            res.status(400).json({message:"token was not valid"})
        }

    }
}

module.exports ={verifyToken};