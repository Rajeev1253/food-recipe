import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//
app.use("/auth", userRouter);
mongoose.connect(
  "mongodb+srv://3241rajeev:Mern123@recipes.9o71ail.mongodb.net/"
);

app.listen(8000, () => {
  console.log("server is listening on port no 8000");
});
