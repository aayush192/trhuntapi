const Game = require('../models/Game');
const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');

// Helper function to generate a unique session ID
const generateSessionId = () => uuidv4();

// Start a new game session
const startGame = async (req, res) => {
  const { type } = req.params;
  const { clueCount, clues, username } = req.body;

  if (!clueCount || typeof clueCount !== 'number' || clueCount <= 0) {
    return res.status(400).json({ error: "Clue count must be a positive number." });
  }
  if (!Array.isArray(clues) || clues.length !== clueCount) {
    return res.status(400).json({ error: "Clues must be an array with length equal to clue count." });
  }
  if (!username) {
    return res.status(400).json({ error: "Username is required." });
  }

  try {
    const sessionId = generateSessionId();
    const game = new Game({ sessionId, type, clueCount, clues, currentClue: 0 });

    await game.save();
    const newUser = new User({ username, activeSession: sessionId });

    await newUser.save();

    console.log(`[${new Date().toISOString()}] POST /api/game/start/${type}: Game started - Session ID: ${sessionId}`);

    res.status(201).json({ sessionId });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] POST /api/game/start/${type}: Error starting game`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Retrieve the next clue
const getClue = async (req, res) => {
  const { sessionId } = req.params;

  try {
    const game = await Game.findOne({ sessionId });
    if (!game) {
      return res.status(404).json({ error: "Game session not found. Start a new game." });
    }

    if (game.currentClue >= game.clues.length) {
      return res.status(200).json({ message: "Congratulations! You've completed the game." });
    }

    const clue = game.clues[game.currentClue];

    console.log(`[${new Date().toISOString()}] GET /api/game/clue/${sessionId}: Clue retrieved`);

    res.status(200).json({ clue });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] GET /api/game/clue/${sessionId}: Error retrieving clue`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Submit an answer and progress the game
const submitAnswer = async (req, res) => {
  const { sessionId } = req.params;
  const { answer } = req.body;

  try {
    const game = await Game.findOne({ sessionId });
    if (!game) {
      return res.status(404).json({ error: "Game session not found. Start a new game." });
    }

    if (game.currentClue >= game.clues.length) {
      return res.status(400).json({ message: "Game already completed. Start a new game." });
    }

    const correctAnswer = game.clues[game.currentClue].answer.trim().toLowerCase();
    const userAnswer = answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      game.currentClue += 1;
      await game.save();

      if (game.currentClue >= game.clues.length) {
        return res.status(200).json({ message: "Congratulations! You've completed the game." });
      }

      console.log(`[${new Date().toISOString()}] POST /api/game/answer/${sessionId}: Correct answer`);
      return res.status(200).json({ message: "Correct! Here's the next clue." });
    } else {
      return res.status(400).json({ message: "Incorrect answer. Try again." });
    }
  } catch (error) {
    console.error(`[${new Date().toISOString()}] POST /api/game/answer/${sessionId}: Error submitting answer`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all available games without clues
const getAllGames = async (req, res) => {
  try {
    const games = await Game.find({}, { clues: 0 });

    console.log(`[${new Date().toISOString()}] GET /api/games: Retrieved ${games.length} games`);

    res.status(200).json(games);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] GET /api/games: Error fetching games`, error);
    res.status(500).json({ error: 'Error fetching games' });
  }
};

module.exports = { startGame, getClue, submitAnswer, getAllGames };
