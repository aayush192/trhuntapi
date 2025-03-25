require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Import CORS
const connectDB = require("./config/db");
const Game = require("./models/Game"); // Import the Game model

const app = express();

// Use CORS middleware
app.use(cors()); // This will enable CORS for all routes

// Connect Database
connectDB();

// Root Route
app.get("/", (req, res) => {
  res.send("Treasure Hunt API is Running...");
});

// Import Routes
const gameRoutes = require("./routes/gameRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/game", gameRoutes);
app.use("/api/user", userRoutes);

// Handle Undefined Routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Function to fetch and log games on server start
async function fetchAndLogGames() {
  try {
    const games = await Game.find();
    console.log("Games fetched on server start:");
    console.log(JSON.stringify(games, null, 2)); // Log games in a readable format
  } catch (error) {
    console.error("Error fetching games on server start:", error);
  }
}

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  await fetchAndLogGames(); // Call the function to fetch and log games
});
