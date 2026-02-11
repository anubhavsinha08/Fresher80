const cors = require("cors");
const express = require("express");
const app = express();

const dbConnect = require("./config/dbConnect");
const authRoutes= require("./routes/authRoutes");
const userRoutes= require("./routes/userRoutes")

require("dotenv").config();

const PORT = process.env.Port || 5000;
const Url = process.env.Mongo_url;

dbConnect(Url);


app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:3000"
}));

app.get("/", (req, res) => {
  res.send("Freshers80 backend running 🚀");
});

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
