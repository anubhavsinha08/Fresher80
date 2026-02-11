const bcrypt = require("bcrypt");
const {UsersModel} = require("../models/UsersModel");
const jwt = require("jsonwebtoken")


const register = async(req,res) => {
    try {
        const {
            UserName,
            Email,
            Password,
            role,
            phone,
            desc,
            country,
        } = req.body;

        if (!UserName || !Email || !Password) {
            return res.status(400).json({ error: "Required fields missing" });
        }

        const existingUser = await UsersModel.findOne({ Email });
        if (existingUser) {
            return res.status(409).json({ error: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(Password , 10);

        const user = new UsersModel({
            UserName,
            Email,
            Password : hashedPassword,
            role,
            phone,
            desc,
            country,
        });

        await user.save();

        res.status(201)
        .json({
            message: "User registered successfully",
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }

}

const login = async(req,res) => {
    try {
        const { Email, Password } = req.body;
    
        if (!Email || !Password) {
          return res.status(400).json({ error: "Email and Password required" });
        }
    
        // 2. Find user
        const user = await UsersModel.findOne({ Email });
        if (!user) {
          return res.status(401).json({ error: "user not found" });
        }
    
        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) {
          return res.status(401).json({ error: "Invalid credentials" });
        }
    
        const token = jwt.sign(
          {
            userId: user._id,
            role: user.role,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );

        res.status(201).json({
          message: "Login successful",
          token,
          role: user.role,
          user: {
            id: user._id,
            UserName: user.UserName,
            Email: user.Email,
          },
        });
    
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
      }

}

module.exports = { register, login }