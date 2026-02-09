const cors = require("cors");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose");
const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.Port || 5000;
const Url = process.env.Mongo_url;

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

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
