const mongoose = require("mongoose");

const dbConnect= async(Url)=>{
    const connect =await mongoose.connect(Url);
    console.log(`db connected : ${connect.connection.host} , ${connect.connection.name}`)
}

module.exports = dbConnect;
