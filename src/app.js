const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
global?.inDevelopment && app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to School Management API");
});
app.use("/api", require("./routes/schoolRouter"));
app.route("*").all((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Internal server error",
  });
});

module.exports = app;
