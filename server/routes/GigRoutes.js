const express = require("express");
const router = express.Router();
const{freelancer,client}= require("../controllers/userController")
const {verifyToken} = require("../middlewares/authMiddleware")
const authorizeRoles = require("../middlewares/roleMiddleware")

const{createGig,allGigs,deleteGig,viewGigs} = require("../controllers/GigController")

router.get("/",allGigs);
router.get("/:id",viewGigs);

module.exports= router;

// ,verifyToken,authorizeRoles("freelancer")