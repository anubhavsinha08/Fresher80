const express = require("express");
const router = express.Router();

const{createGig,allGigs,deleteGig,viewGigs} = require("../controllers/GigController")

router.get("/",allGigs);

module.exports= router;