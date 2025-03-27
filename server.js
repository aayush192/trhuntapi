require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Import CORS
const connectDB = require("./config/db");
const Game = require("./models/Game"); // Import the Game model

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
  } catch (error) {
    console.error("Error fetching games on server start:", error);
  }
}
const HOST = "http://localhost"; // Change if needed (e.g., when deploying)

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port$ ${HOST}:${PORT}`);
  await fetchAndLogGames(); // Call the function to fetch and log games
});
