const cors = require("cors");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();

const PORT = process.env.Port || 5000;
const Url = process.env.Mongo_url;


app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:3000"
}));

const {UsersModel} = require("./models/UsersModel")

main()
.then(()=>{
    console.log("db conected successfully")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(Url);
}

app.get("/", (req, res) => {
  res.send("Freshers80 backend running 🚀");
});

app.post("/api/user", async (req, res) => {
  try {
    const {
      UserName,
      Email,
      Password,
      IsSeller,
      phone,
      desc,
      country,
    } = req.body;

    // 1️⃣ Basic validation
    if (!UserName || !Email || !Password) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    // 2️⃣ Check if email already exists
    const existingUser = await UsersModel.findOne({ Email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already registered" });
    }

    // 3️⃣ Create user (password hashed automatically)
    const user = new UsersModel({
      UserName,
      Email,
      Password,
      IsSeller,
      phone,
      desc,
      country,
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        UserName: user.UserName,
        Email: user.Email,
        role: user.IsSeller ? "seller" : "client",
      },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { Email, Password } = req.body;
    console.log(req.body);
    console.log(Email);
    console.log(Password);

    if (!Email || !Password) {
      return res.status(400).json({ error: "Email and Password required" });
    }

    // 2. Find user
    const user = await UsersModel.findOne({ Email });
    console.log(user);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(Password, user.Password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // 4. Create JWT (ROLE INCLUDED)
    const token = jwt.sign(
      {
        userId: user._id,
        IsSeller: user.IsSeller, // 👈 role
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 5. Send response
    res.json({
      message: "Login successful",
      token,
      role: user.IsSeller ? "seller" : "client",
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
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
