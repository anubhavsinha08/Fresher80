const {GigSchema} = require("../schemas/GigSchema");
const {model} = require("mongoose");

const GigModel = new model("Gig", GigSchema);

module.exports= {GigModel};