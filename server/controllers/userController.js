

const freelancer= (req,res)=>{
    return res.status(201).json({message:"freelancer route"});
}

const client =(req,res)=>{
    return res.status(201).json({message:"client route"});
}

module.exports={freelancer,client};