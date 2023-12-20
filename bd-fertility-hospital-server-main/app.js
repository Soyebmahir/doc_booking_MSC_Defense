const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// const rootRouter = require("./routes/index");
const cookieParser = require("cookie-parser");
const featureRoute = require("./src/Module/Features/featureRoute.js");
const doctorRoute = require("./src/Module//Doctors/doctorsRoute.js");
const usersRoute = require("./src/Module/Users/userRoute");
const blogRoute = require("./src/Module/Blog/blogRoute.js");
// const allGalleryRoute = require("./src/Module/Gallery/galleryRoute.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://localhost:5000",
      "https://abinash-dashboard.netlify.app",
      "https://abinash-website.netlify.app",
      "https://uscabinash.abinashfoundation.com",
    ],
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

// app.use("/api/v1", rootRouter);

app.use("/user-route", usersRoute);
app.use("/doctor-route", doctorRoute);
app.use("/blog-route", blogRoute); // Use the router directly
app.use("/bd-fertility", featureRoute);
// app.use("/gallery-route", allGalleryRoute);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
