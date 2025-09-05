const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// API endpoint
app.post("/api/sum", (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.status(400).json({ error: "Inputs must be numbers" });
  }

  const result = num1 + num2;
  res.json({ result });
});

// Azure uses process.env.PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

const path = require("path");

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});