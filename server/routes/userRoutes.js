const express = require("express");
const router = express.Router();
const{freelancer,client}= require("../controllers/userController")
const {verifyToken} = require("../middlewares/authMiddleware")
const authorizeRoles = require("../middlewares/roleMiddleware")


router.get("/freelancer",verifyToken,authorizeRoles("freelancer"),freelancer);
router.get("/client",verifyToken,authorizeRoles("freelancer","client"),client);

module.exports= router;