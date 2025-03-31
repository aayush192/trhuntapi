// gameController.js
const Game = require('../models/Game');
const GameSession = require('../models/GameSession');
const { v4: uuidv4 } = require('uuid');


const generateSessionId = () => uuidv4();

// Start a new game session or return existing session if player already has one
const startGame = async (req, res) => {
  console.log("📥 Request received at /api/game/start", req.body);

  const { gameId, playerId } = req.body;

  if (!gameId || !playerId) {
    console.log("❌ Missing gameId or playerId");
    return res.status(400).json({ error: "Game ID and Player ID are required." });
  }

  try {
    // Check if a session already exists for the given gameId and playerId
    let existingSession = await GameSession.findOne({ gameId, playerId });

    if (existingSession) {
      console.log("✅ Existing session found:", existingSession);
      return res.status(200).json({ sessionId: existingSession.sessionId, gameSession: existingSession });
    }

    // Generate a new session ID
    const sessionId = generateSessionId(); 

    const gameSession = new GameSession({
      sessionId,
      gameId,
      playerId,
      currentClueIndex: 0, 
      completed: false, 
    });

    console.log("✅ Creating new session:", gameSession);

    // Save the game session to the database
    await gameSession.save();
    console.log("✅ Session successfully saved in DB");

    res.status(201).json({ sessionId, gameSession });

  } catch (error) {
    console.error("❌ Error in startGame:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};




// Get the next clue
const getClue = async (req, res) => {
  const { sessionId, gameId } = req.body;

  if (!sessionId || !gameId) {
    return res.status(400).json({ error: "Session ID and Game ID are required." });
  }

  try {
    const session = await GameSession.findOne({ sessionId });

    if (!session) {
      return res.status(404).json({ error: "Game session not found. Start a new game." });
    }

    if (session.gameId !== gameId) {
      return res.status(400).json({ error: "Invalid Game ID for this session." });
    }

    const game = await Game.findOne({ gameId });

    if (!game) {
      return res.status(404).json({ error: "Game data not found." });
    }

    if (session.currentClueIndex >= game.clues.length) {
      return res.status(200).json({ message: "Congratulations! You've completed the game." });
    }

    // Get the current clue (Do NOT increase currentClueIndex here!)
    const clue = game.clues[session.currentClueIndex];

    res.status(200).json({ clue });

  } catch (error) {
    console.error("❌ Error retrieving clue:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Submit answer and update progress
const submitAnswer = async (req, res) => {
  const { sessionId, gameId, answer } = req.body;
  if (!sessionId || !gameId || !answer) {
    return res.status(400).json({ error: "Session ID, Game ID, and answer are required." });
  }

  try {
    const session = await GameSession.findOne({ sessionId });
    if (!session) return res.status(404).json({ error: "Game session not found." });
    if (session.gameId !== gameId) return res.status(400).json({ error: "Invalid Game ID." });

    const game = await Game.findOne({ gameId });
    if (!game) return res.status(404).json({ error: "Game data not found." });

    if (session.currentClueIndex >= game.clues.length) {
      return res.status(200).json({ message: "Game already completed." });
    }

    const currentClue = game.clues[session.currentClueIndex];
    if (currentClue.answer.toLowerCase() === answer.toLowerCase()) {
      session.currentClueIndex++;
      if (session.currentClueIndex >= game.clues.length) {
        session.completed = true;
      }
      await session.save();
      res.status(200).json({ message: "Correct answer!", nextClueIndex: session.currentClueIndex, completed: session.completed,correct:true });
    } else {
      res.status(200).json({ error: "Incorrect answer. Try again." });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Get all games (without clues)
const getAllGames = async (req, res) => {
  try {
    const games = await Game.find({}, { clues: 0 }); // Exclude clues field
    res.status(200).json(games);
  } catch (error) {
    console.error("❌ Error fetching games:", error);
    res.status(500).json({ error: 'Error fetching games' });
  }
};

module.exports = { startGame, getClue, submitAnswer, getAllGames };  // Export functions
