import express from "express";
import { config } from "dotenv";

// configuring environment vars
config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ msg: "this is index", success: true });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
