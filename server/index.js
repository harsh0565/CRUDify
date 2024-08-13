import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import route from "./router/userRoute.js";



const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGOURL;

mongoose.connect(URL)
  .then(() => {
    console.log("Connected to the database successfully");
    app.listen(PORT, () => {
      console.log(`Server is running at port http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error occurred while connecting to the database:", err);
  });

app.use("/api", route);
