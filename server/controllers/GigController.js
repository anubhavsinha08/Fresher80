const {GigModel} = require("../models/GigModel");

const createGig =(req,res)=>{

}

const deleteGig =(req,res)=>{

}

const allGigs =async(req,res)=>{
    try{
        let data = await GigModel.find({});

        if(!data){
            res.status(400).json({message:" no data found"});
        }
        return res.status(200).json(data);

    }catch(err){
        res.status(400).json({message:" no data found"});
    }

}

const viewGigs =(req,res)=>{

}


module.exports={
    createGig,
    allGigs,
    deleteGig,
    viewGigs
}