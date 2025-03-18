const express = require("express");
const cors = require("cors"); // Importing the cors package



const app = express();
app.use(express.json()); // For parsing application/json

const port = process.env.PORT || 3000;

const games = {
  10: {
    gameId: "TH-10",
    title: "Treasure Hunt - Short Challenge",
    description: "Find the treasure by solving 10 exciting clues.",
    difficulty: "Easy",
    category: "Puzzle Adventure",
    estimatedTime: "15-30 minutes",
    rewardPoints: 100,
    clues: [
      { id: 1, clue: "I have keys but open no locks. What am I?", answer: "Keyboard" },
      { id: 2, clue: "The more you take, the more you leave behind. What am I?", answer: "Footsteps" },
      { id: 3, clue: "I speak without a mouth and hear without ears. What am I?", answer: "Echo" },
      { id: 4, clue: "I can be cracked, made, told, and played. What am I?", answer: "Joke" },
      { id: 5, clue: "The more you remove from me, the bigger I get. What am I?", answer: "Hole" },
      { id: 6, clue: "I have hands but cannot clap. What am I?", answer: "Clock" },
      { id: 7, clue: "I fly without wings. I cry without eyes. What am I?", answer: "Cloud" },
      { id: 8, clue: "I can be liquid or solid, and sometimes I bubble. What am I?", answer: "Water" },
      { id: 9, clue: "I have cities, but no houses. I have mountains, but no trees. What am I?", answer: "Map" },
      { id: 10, clue: "The more you share me, the less you have. What am I?", answer: "Secret" }
    ]
  },
  20: {
    gameId: "TH-20",
    title: "Treasure Hunt - Medium Challenge",
    description: "A thrilling treasure hunt with 20 mind-bending clues.",
    difficulty: "Medium",
    category: "Puzzle Adventure",
    estimatedTime: "30-60 minutes",
    rewardPoints: 250,
    clues: [
      { id: 1, clue: "I have branches but no leaves, trunk, or fruit. What am I?", answer: "Bank" },
      { id: 2, clue: "I get sharper the more you use me. What am I?", answer: "Brain" },
      { id: 3, clue: "I'm full of holes but still hold water. What am I?", answer: "Sponge" },
      { id: 4, clue: "The more you peel, the more you cry. What am I?", answer: "Onion" },
      { id: 5, clue: "You can catch me, but you can't throw me. What am I?", answer: "Cold" },
      { id: 6, clue: "I'm always running but never move. What am I?", answer: "Clock" },
      { id: 7, clue: "I go up but never come down. What am I?", answer: "Age" },
      { id: 8, clue: "The more I work, the weaker I become. What am I?", answer: "Candle" },
      { id: 9, clue: "I get broken without being held. What am I?", answer: "Promise" },
      { id: 10, clue: "I'm not alive, but I grow. I have no lungs, but I need air. What am I?", answer: "Fire" },
      { id: 11, clue: "I'm tall when I'm young, and I'm short when I'm old. What am I?", answer: "Candle" },
      { id: 12, clue: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "Letter M" },
      { id: 13, clue: "I have ears but cannot hear. What am I?", answer: "Corn" },
      { id: 14, clue: "I have legs but do not walk. What am I?", answer: "Table" },
      { id: 15, clue: "I shrink smaller every time I take a bath. What am I?", answer: "Soap" },
      { id: 16, clue: "I can be cracked, made, told, and played. What am I?", answer: "Joke" },
      { id: 17, clue: "I'm an instrument you can hear but not touch. What am I?", answer: "Voice" },
      { id: 18, clue: "The more you take from me, the bigger I get. What am I?", answer: "Hole" },
      { id: 19, clue: "I get wetter the more I dry. What am I?", answer: "Towel" },
      { id: 20, clue: "I have no feet, no hands, no wings, but I climb to the sky. What am I?", answer: "Smoke" }
    ]
  },
  30: {
    gameId: "TH-30",
    title: "Treasure Hunt - Ultimate Challenge",
    description: "The hardest challenge with 30 difficult clues. Only the best can finish!",
    difficulty: "Hard",
    category: "Puzzle Adventure",
    estimatedTime: "60+ minutes",
    rewardPoints: 500,
    clues: [
      { id: 1, clue: "I have hands but cannot clap. What am I?", answer: "Clock" },
      { id: 2, clue: "The more you take, the more you leave behind. What am I?", answer: "Footsteps" },
      { id: 3, clue: "I fly without wings. I cry without eyes. What am I?", answer: "Cloud" },
      { id: 4, clue: "The more you remove from me, the bigger I get. What am I?", answer: "Hole" },
      { id: 5, clue: "I can be cracked, made, told, and played. What am I?", answer: "Joke" },
      { id: 6, clue: "I speak without a mouth and hear without ears. What am I?", answer: "Echo" },
      { id: 7, clue: "The more you share me, the less you have. What am I?", answer: "Secret" },
      { id: 8, clue: "I get wetter the more I dry. What am I?", answer: "Towel" },
      { id: 9, clue: "I have cities, but no houses. I have mountains, but no trees. What am I?", answer: "Map" },
      { id: 10, clue: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "Letter M" },
      { id: 11, clue: "I'm full of holes but still hold water. What am I?", answer: "Sponge" },
      { id: 12, clue: "The more I work, the weaker I become. What am I?", answer: "Candle" },
      { id: 13, clue: "I go up but never come down. What am I?", answer: "Age" },
      { id: 14, clue: "I have legs but do not walk. What am I?", answer: "Table" },
      { id: 15, clue: "You can catch me, but you can't throw me. What am I?", answer: "Cold" },
      { id: 16, clue: "I have ears but cannot hear. What am I?", answer: "Corn" },
      { id: 17, clue: "I'm always running but never move. What am I?", answer: "Clock" },
      { id: 18, clue: "I get broken without being held. What am I?", answer: "Promise" },
      { id: 19, clue: "I have no feet, no hands, no wings, but I climb to the sky. What am I?", answer: "Smoke" },
      { id: 20, clue: "I'm an instrument you can hear but not touch. What am I?", answer: "Voice" },
      { id: 21, clue: "I get sharper the more you use me. What am I?", answer: "Brain" },
      { id: 22, clue: "I shrink smaller every time I take a bath. What am I?", answer: "Soap" },
      { id: 23, clue: "I have a spine but no bones. What am I?", answer: "Book" },
      { id: 24, clue: "I make you laugh but I am not a comedian. What am I?", answer: "Joke" },
      { id: 25, clue: "I can be liquid, solid, and gas. What am I?", answer: "Water" },
      { id: 26, clue: "I have teeth but cannot bite. What am I?", answer: "Comb" },
      { id: 27, clue: "I wave but have no hands. What am I?", answer: "Flag" },
      { id: 28, clue: "I'm round, but not always. What am I?", answer: "Wheel" },
      { id: 29, clue: "I get sharper when you use me. What am I?", answer: "Pencil" },
      { id: 30, clue: "I stand tall with rings but do not wear them. What am I?", answer: "Tree" }
    ]
  }
};

// In-memory user progress (replace with a database in production)
const userProgress = {};

// Success and error response functions
const successResponse = (data, message = "Request successful") => ({
    status: "success",
    message,
    data,
});

const errorResponse = (message = "An error occurred", error = null) => ({
    status: "error",
    message,
    error,
});

// API endpoints

// 1. Fetch available games (GET /games)
app.get("/games", (req, res) => {
  // This endpoint handles GET requests to /games.
  // It returns a list of all available treasure hunt games.

  // Object.keys(games) gets an array of the keys (10, 20, 30) from the 'games' object.
  // .map() then transforms each key into an object representing a game.
  const availableGames = Object.keys(games).map((key) => ({
      // 'type' is the number of clues in the game.
      type: parseInt(key),
      // 'title', 'description', 'difficulty', and 'category' are properties of each game.
      title: games[key].title,
      description: games[key].description,
      difficulty: games[key].difficulty,
      category: games[key].category,
  }));
  // Sends the 'availableGames' array as a JSON response to the client.
  res.json(successResponse(availableGames));
});

// 2. Start a game session (POST /game/start/:type)
app.post("/game/start/:type", (req, res) => {
  // This endpoint handles POST requests to /game/start/:type.
  // It starts a new game session for a user.

  // 'req.params.type' gets the ':type' parameter from the URL (e.g., 10, 20, 30).
  const type = parseInt(req.params.type);
  // Checks if the requested 'type' exists in the 'games' object.
  if (!games[type]) {
      // If the 'type' is invalid, sends a 400 (Bad Request) error response.
      return res.status(400).json(errorResponse("Invalid game type"));
  }

  // 'req.body.userId' gets the 'userId' from the request body (sent by the client).
  const userId = req.body.userId; // Assuming you have a userId
  // Checks if 'userId' is provided in the request body.
  if (!userId) {
      // If 'userId' is missing, sends a 400 (Bad Request) error response.
      return res.status(400).json(errorResponse("userId is required"));
  }

  // Creates a new entry in the 'userProgress' object to store the user's game progress.
  // 'userId' is used as the key to identify the user's session.
  userProgress[userId] = {
      // 'gameType' stores the selected game type (10, 20, or 30).
      gameType: type,
      // 'currentClueIndex' keeps track of the current clue the user is on (starts at 0).
      currentClueIndex: 0,
  };
  // Sends a success response to the client with a message and the started game data.
  res.json(successResponse({ message: `Game ${type} started for user ${userId}` }));
});

// 3. Fetch the next clue based on user progress (GET /game/clue/:userId)
app.get("/game/clue/:userId", (req, res) => {
  // This endpoint handles GET requests to /game/clue/:userId.
  // It returns the next clue for the user based on their progress.

  // 'req.params.userId' gets the 'userId' parameter from the URL.
  const userId = req.params.userId;
  // Checks if a game session exists for the given 'userId'.
  if (!userProgress[userId]) {
      // If the session is not found, sends a 404 (Not Found) error response.
      return res.status(404).json(errorResponse("Game session not found for this user"));
  }

  // Retrieves the user's game progress from the 'userProgress' object.
  const { gameType, currentClueIndex } = userProgress[userId];
  // Retrieves the clues for the user's selected game type.
  const clues = games[gameType].clues;

  // Checks if the user has completed all the clues.
  if (currentClueIndex >= clues.length) {
      // If the game is completed, sends a success response with a completion message.
      return res.json(successResponse({ message: "Game completed" }));
  }

  // Retrieves the current clue based on the 'currentClueIndex'.
  const clue = clues[currentClueIndex];
  // Sends the current clue as a JSON response to the client.
  res.json(successResponse({ clue: { id: clue.id, clue: clue.clue } }));
});

// 4. Check the answer before providing the next clue (POST /game/answer/:userId)
app.post("/game/answer/:userId", (req, res) => {
  // This endpoint handles POST requests to /game/answer/:userId.
  // It checks the user's answer and provides the next clue if the answer is correct.

  // 'req.params.userId' gets the 'userId' parameter from the URL.
  const userId = req.params.userId;
  // Checks if a game session exists for the given 'userId'.
  if (!userProgress[userId]) {
      // If the session is not found, sends a 404 (Not Found) error response.
      return res.status(404).json(errorResponse("Game session not found for this user"));
  }

  // Retrieves the user's game progress.
  const { gameType, currentClueIndex } = userProgress[userId];
  // Retrieves the clues for the user's selected game.
  const clues = games[gameType].clues;
  // 'req.body.answer' gets the user's answer from the request body.
  const userAnswer = req.body.answer;

  // Checks if the game is already completed.
  if (currentClueIndex >= clues.length) {
      // If the game is completed, sends a 400 (Bad Request) error response.
      return res.status(400).json(errorResponse("Game already completed"));
  }

  // Retrieves the correct answer for the current clue.
  const correctAnswer = clues[currentClueIndex].answer.toLowerCase();
  // Checks if the user's answer matches the correct answer (case-insensitive).
  if (userAnswer.toLowerCase() === correctAnswer) {
      // If the answer is correct, increments the 'currentClueIndex' to move to the next clue.
      userProgress[userId].currentClueIndex++;
      // Sends a success response indicating the answer is correct.
      res.json(successResponse({ correct: true, message: "Correct answer!" }));
  } else {
      // If the answer is incorrect, sends a success response indicating the answer is incorrect.
      res.json(successResponse({ correct: false, message: "Incorrect answer. Try again." }));
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  // This middleware handles any errors that occur during the request processing.
  // It logs the error stack to the console and sends a 500 (Internal Server Error) response.
  console.error(err.stack);
  res.status(500).json(errorResponse("Something went wrong!", err));
});

// Starts the server and listens on the specified port.
app.listen(port, () => {
  console.log(`Treasure Hunt API running at http://localhost:${port}`);
});