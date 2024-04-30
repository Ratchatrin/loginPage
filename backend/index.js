import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./model/user.model.js";
const app = express();
app.use(json());
app.use(cors());

app.post("/signin", async (req, res) => {
  try {
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) {
      res.status(200).json("Email is Exist");
    } else {
      const user = await User.create(req.body);
      res.status(201).json(user);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});
mongoose
  .connect(
    "mongodb+srv://ratchatrin12:QpACmHJUWMCJBLIl@cluster0.cayleoy.mongodb.net/userStore?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connect to database");
    app.listen(3000, () => {
      console.log("Server is connect on 3000");
    });
  })
  .catch(() => {
    console.error("Failed to connect to database:", error);
  });
