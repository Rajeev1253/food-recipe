import Jwt from "jsonwebtoken";
import bcrpt from "bcrypt";
import express from "express";
import { userModel } from "../model/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });
  if (user) {
    res.send("user already existedd");
  }
});
export { router as userRouter };
