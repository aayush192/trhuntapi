require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Import CORS
const connectDB = require("./config/db");
const gameController = require("./controllers/gameController"); // Import gameController

const app = express();

// Use CORS middleware
app.use(cors()); // This will enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON body
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded body

// Connect Database
connectDB();

// Root Route
app.get("/", (req, res) => {
  res.send("Treasure Hunt API is Running...");
});

// Game Routes
app.post("/api/game/start", gameController.startGame); // Start a new game session
app.post("/api/game/clue", gameController.getClue); // Get the next clue
app.get("/api/games", gameController.getAllGames); // Get all games (without clues)

// Handle Undefined Routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start Server
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
