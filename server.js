const express = require("express");

const app = express();
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

// Middleware to validate game type
const validateGameType = (req, res, next) => {
  const type = parseInt(req.params.type);
  if (![10, 20, 30].includes(type)) {
    return res.status(400).json({ message: "Invalid game type. Available: 10, 20, 30 clues." });
  }
  next();
};

// Middleware to validate clue ID
const validateClueId = (req, res, next) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) {
    return res.status(400).json({ message: "Invalid clue ID. Must be a number." });
  }
  next();
};

// Get game details and clues
app.get("/game/:type", validateGameType, (req, res) => {
  const type = parseInt(req.params.type);
  res.json(games[type]);
});

// Get a single clue from a game type
app.get("/game/:type/:id", validateGameType, validateClueId, (req, res) => {
  const type = parseInt(req.params.type);
  const id = parseInt(req.params.id);
  const game = games[type];

  const clue = game.clues.find(c => c.id === id);
  if (clue) {
    res.json(clue);
  } else {
    res.status(404).json({ message: "Clue not found" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Treasure Hunt API running at http://localhost:${port}`);
});
