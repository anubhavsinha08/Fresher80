const authorizeRoles=(...allowedRoles)=>{
    return (req,res,next)=>{
        console.log(req.user);
        if(!allowedRoles.includes(req.user.role)){
            return res.status(400).send({message:"access denied"})
        }
        next();

    }

}

module.exports = authorizeRoles;