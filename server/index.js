const cors = require("cors");
const express = require("express");
const app = express();

const dbConnect = require("./config/dbConnect");
const authRoutes= require("./routes/authRoutes");
const userRoutes= require("./routes/userRoutes");
const GigRoutes = require("./routes/GigRoutes")
// const {GigModel} = require("./models/GigModel")

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
app.use("/api/gigs",GigRoutes);


// app.post("/gigs", async (req, res) => {
//   try {
//     const data = await GigModel.create([
//       {
//         userId: "66a123456789abcd001",
//         title: "I will create high converting UGC video ads",
//         desc: "Professional UGC style video ads for TikTok, Instagram and Facebook.",
//         cat: "video",
//         price: 75,
//         cover: "https://example.com/images/ugc-cover.webp",
//         images: [
//           "https://example.com/images/ugc1.webp",
//           "https://example.com/images/ugc2.webp"
//         ],
//         ownerName: "Aman Verma",
//         shortTitle: "UGC Video Ads",
//         shortDesc: "High converting short video ads",
//         deliveryTime: 3,
//         revisionNumber: 2,
//         features: [
//           "Script writing",
//           "HD 1080p",
//           "Subtitles included",
//           "Commercial rights"
//         ]
//       },
//       {
//         userId: "66a123456789abcd002",
//         title: "I will design a modern and minimalist logo",
//         desc: "Unique and professional logo design tailored to your brand identity.",
//         cat: "design",
//         price: 50,
//         cover: "https://example.com/images/logo-cover.webp",
//         images: [
//           "https://example.com/images/logo1.webp",
//           "https://example.com/images/logo2.webp"
//         ],
//         ownerName: "Priya Sharma",
//         shortTitle: "Minimal Logo Design",
//         shortDesc: "Professional brand logo",
//         deliveryTime: 2,
//         revisionNumber: 5,
//         features: [
//           "3 Logo concepts",
//           "Vector files",
//           "High resolution",
//           "Source files"
//         ]
//       }
//     ]);

//     res.status(201).json(data);

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  
});
