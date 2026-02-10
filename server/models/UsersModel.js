const {model}=require("mongoose");
const {UsersSchema}=require("../schemas/UsersSchema");
const bcrypt = require("bcrypt");

UsersSchema.pre("save", async function(){
    this.Password = await bcrypt.hash(this.Password,12);
    
    
});

const UsersModel = new model("User" , UsersSchema);

module.exports={UsersModel};


