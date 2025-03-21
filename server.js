const express = require("express");

const cors = require("cors"); // Importing the cors package







const app = express();

app.use(cors());

app.use(express.json()); // For parsing application/json



const port = process.env.PORT || 3000;

// Generate unique session IDs
const generateSessionId = () => {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
};

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
    { id: 1, clue: "I measure existence in stolen breaths, my weathered skin tracing veins of shadow.", answer: "Sundial" },
    { id: 2, clue: "Each departure forges monuments to absence.", answer: "Footsteps" },
    { id: 3, clue: "I dance on thermals without feathers, weep without sorrow.", answer: "Cumulus" },
    { id: 4, clue: "My kingdom expands with every subject exiled.", answer: "Vacuum" },
    { id: 5, clue: "Born in tension, executed in release. Neither flesh nor string, yet I snap.", answer: "Joke" },
    { id: 6, clue: "I wear your face but cast no reflection, repeat your words but hold no opinion.", answer: "Echo" },
    { id: 7, clue: "The currency that bankrupts both giver and receiver.", answer: "Secret" },
    { id: 8, clue: "My thirst grows with each drought I end.", answer: "Towel" },
    { id: 9, clue: "Canvas of possibilities where peaks rise without stone, borders exist without walls.", answer: "Atlas" },
    { id: 10, clue: "I crown ephemera, vanish in eternity. Hidden in 'moonlight' but absent in 'sun'.", answer: "Letter M" },
    { id: 11, clue: "A labyrinth of absence sustains your flood.", answer: "Sponge" },
    { id: 12, clue: "My rebellion against darkness shortens my reign.", answer: "Candle" },
    { id: 13, clue: "The architect that only builds upward.", answer: "Age" },
    { id: 14, clue: "A forest frozen in servitude, bearing fruit it cannot taste.", answer: "Dining Table" },
    { id: 15, clue: "You invite me through breached walls, yet blame the fortress.", answer: "Draft" },
    { id: 16, clue: "Golden battalions stand deaf to the harvest's fanfare.", answer: "Cornfield" },
    { id: 17, clue: "Devours moments yet remains eternally hungry.", answer: "Chronometer" },
    { id: 18, clue: "Fragile as glass, yet no hands can mend its fracture.", answer: "Vow" },
    { id: 19, clue: "The ghost that ascends through murder.", answer: "Incense" },
    { id: 20, clue: "The weapon that conquers without leaving scars.", answer: "Eloquence" },
    { id: 21, clue: "The forge where even fire is reshaped.", answer: "Mind" },
    { id: 22, clue: "The martyr of cleanliness, diminished by every crusade.", answer: "Lather" },
    { id: 23, clue: "A silent parliament of dead trees.", answer: "Library" },
    { id: 24, clue: "The assassin who kills with resurrection.", answer: "Punchline" },
    { id: 25, clue: "The prisoner freed only through self-destruction.", answer: "Ice" },
    { id: 26, clue: "The gatekeeper of order, armed with unblunted fangs.", answer: "Comb" },
    { id: 27, clue: "The captive that rules its jailers.", answer: "Standard" },
    { id: 28, clue: "The tyrant and liberator of momentum.", answer: "Axle" },
    { id: 29, clue: "My wisdom flows through diminishing veins.", answer: "Graphite" },
    { id: 30, clue: "The scribe that writes in concentric poetry.", answer: "Oak" }
  ]

  }

};



// In-memory user progress (replace with a database in production)
const SESSION_TIMEOUT = 6 * 60 * 60 * 1000; // 6 hours in milliseconds


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



// Periodic cleanup of expired sessions (runs every hour)
setInterval(() => {
  const now = Date.now();
  Object.keys(userProgress).forEach((sessionId) => {
    if (now - new Date(userProgress[sessionId].startTime).getTime() > SESSION_TIMEOUT) {
      delete userProgress[sessionId];
      console.log(`Session ${sessionId} expired and removed.`);
    }
  });
}, 60 * 60 * 1000);

// API endpoints

// 1. Get available games
app.get("/games", (req, res) => {
  const availableGames = Object.keys(games).map((key) => ({
    type: parseInt(key),
    title: games[key].title,
    description: games[key].description,
    difficulty: games[key].difficulty,
    category: games[key].category,
  }));
  res.json(successResponse(availableGames));
});

// 2. Start game - generates session ID
app.post("/game/start/:type", (req, res) => {
  const type = parseInt(req.params.type);
  if (!games[type]) {
    return res.status(400).json(errorResponse("Invalid game type"));
  }

  const sessionId = generateSessionId();
  userProgress[sessionId] = {
    gameType: type,
    currentClueIndex: 0,
    startTime: new Date().toISOString(),
  };

  res.json(successResponse({
    sessionId,
    gameType: type,
    message: `Game session started`,
  }));
});

// 3. Get clue - checks session expiration
app.get("/game/clue/:sessionId", (req, res) => {
  const sessionId = req.params.sessionId;
  const progress = userProgress[sessionId];

  if (!progress) {
    return res.status(404).json(errorResponse("Session not found"));
  }

  if (Date.now() - new Date(progress.startTime).getTime() > SESSION_TIMEOUT) {
    delete userProgress[sessionId];
    return res.status(403).json(errorResponse("Session expired. Please start a new game."));
  }

  const clues = games[progress.gameType].clues;
  if (progress.currentClueIndex >= clues.length) {
    return res.json(successResponse({ message: "Game completed" }));
  }

  res.json(successResponse({
    clueNumber: progress.currentClueIndex + 1,
    totalClues: clues.length,
    clue: { id: clues[progress.currentClueIndex].id, text: clues[progress.currentClueIndex].clue }
  }));
});

// 4. Submit answer - checks session expiration
app.post("/game/answer/:sessionId", (req, res) => {
  const sessionId = req.params.sessionId;
  const progress = userProgress[sessionId];

  if (!progress) {
    return res.status(404).json(errorResponse("Session not found"));
  }

  if (Date.now() - new Date(progress.startTime).getTime() > SESSION_TIMEOUT) {
    delete userProgress[sessionId];
    return res.status(403).json(errorResponse("Session expired. Please start a new game."));
  }

  const clues = games[progress.gameType].clues;
  if (progress.currentClueIndex >= clues.length) {
    return res.status(400).json(errorResponse("Game already completed"));
  }

  const userAnswer = req.body.answer?.trim() || "";
  const correctAnswer = clues[progress.currentClueIndex].answer.toLowerCase();

  if (userAnswer.toLowerCase() === correctAnswer) {
    progress.currentClueIndex++;
    const isGameComplete = progress.currentClueIndex >= clues.length;
    
    return res.json(successResponse({
      correct: true,
      isGameComplete,
      message: isGameComplete ? "Final answer correct! Game completed!" : "Correct! Next clue unlocked"
    }));
  }

  res.json(successResponse({
    correct: false,
    message: "Incorrect answer. Try again."
  }));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json(errorResponse("Something went wrong!", err));
});

// Start server
app.listen(port, () => {
  console.log(`Treasure Hunt API running at http://localhost:${port}`);
});
