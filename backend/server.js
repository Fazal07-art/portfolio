const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");
const Contact = require("./models/Contact");

dns.setServers(["8.8.8.8"]);

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
  console.error("MongoDB connection failed:");
  console.error(error);
});
  

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "FAZAL S Portfolio Backend is running successfully!",
  });
});
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error.message);

    res.status(500).json({
      message: "Failed to send message.",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});