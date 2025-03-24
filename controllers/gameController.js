const Game = require('../models/Game');
const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');

// Helper function to generate a unique session ID
const generateSessionId = () => {
  return uuidv4(); // Generates a unique session ID
};

// Start a new game for the user
const startGame = async (req, res) => {
  const { name, clueCount, clues } = req.body;

  // Validation check: Ensure that all required fields are present
  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }
  if (!clueCount || typeof clueCount !== 'number' || clueCount <= 0) {
    return res.status(400).json({ error: "Clue count must be a positive number." });
  }
  if (!Array.isArray(clues) || clues.length !== clueCount) {
    return res.status(400).json({ error: "Clues must be an array with length equal to clue count." });
  }

  try {
    // Generate a unique game ID and create a new game document
    const gameId = generateSessionId();
    const game = new Game({ gameId, name, clueCount, clues, currentClue: 0 });
    await game.save();

    // Generate a unique session ID and create a new user document
    const sessionId = generateSessionId();
    const newUser = new User({ username: req.body.username, activeGame: gameId });
    await newUser.save();

    // Log the game start details
    console.log(`[${new Date().toISOString()}] POST /api/games: Game started - Game ID: ${gameId}, Session ID: ${sessionId}, Request body: ${JSON.stringify(req.body)}`);

    // Respond with the gameId and sessionId to the frontend
    res.status(201).json({ gameId, sessionId }); // Use 201 for created
  } catch (error) {
    // Log any errors that occurred during game start
    console.error(`[${new Date().toISOString()}] POST /api/games: Error starting game - Request body: ${JSON.stringify(req.body)}, Error:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get the clue for a specific game
const getClue = async (req, res) => {
  const { gameId } = req.params;

  try {
    // Retrieve user progress based on the active game
    const progress = await User.findOne({ activeGame: gameId });
    if (!progress) {
      // Log if the session is not found
      console.log(`[${new Date().toISOString()}] GET /api/games/${gameId}/clues: Session not found for game ID: ${gameId}`);
      return res.status(404).json({ error: "Session not found, please start a new game" });
    }

    // Retrieve the game details
    const game = await Game.findOne({ gameId });
    if (!game) {
      // Log if the game is not found
      console.log(`[${new Date().toISOString()}] GET /api/games/${gameId}/clues: Game not found - Game ID: ${gameId}`);
      return res.status(404).json({ error: `Game with ID: ${gameId} not found` });
    }

    // Retrieve the clue for the current progress in the game
    const clue = game.clues[game.currentClue];

    // Log the clue retrieval details
    console.log(`[${new Date().toISOString()}] GET /api/games/${gameId}/clues: Clue retrieved - Game ID: ${gameId}, Clue: ${JSON.stringify(clue)}`);

    // Send the clue as a response to the frontend
    res.status(200).json({ clue });
  } catch (error) {
    // Log any errors that occurred during clue retrieval
    console.error(`[${new Date().toISOString()}] GET /api/games/${gameId}/clues: Error retrieving clue - Game ID: ${gameId}, Error:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Submit an answer for a specific clue in the game
const submitAnswer = async (req, res) => {
  const { gameId } = req.params;
  const { answer } = req.body;

  try {
    // Retrieve the game details
    const game = await Game.findOne({ gameId });
    if (!game) {
      // Log if the game is not found
      console.log(`[${new Date().toISOString()}] POST /api/games/${gameId}/answer: Game not found - Game ID: ${gameId}`);
      return res.status(404).json({ error: `Game with ID: ${gameId} not found` });
    }

    // Check if the provided answer matches the correct answer (case-insensitive)
    const correctAnswer = game.clues[game.currentClue].answer.toLowerCase();
    const userAnswer = answer.toLowerCase();

    // If the answer is correct, move to the next clue
    if (userAnswer === correctAnswer) {
      game.currentClue += 1;
      await game.save();

      // Log the correct answer submission details
      console.log(`[${new Date().toISOString()}] POST /api/games/${gameId}/answer: Correct answer - Game ID: ${gameId}, Clue: ${game.currentClue}`);
      res.status(200).json({ message: "Correct! Here's the next clue." });
    } else {
      // Log the incorrect answer submission details
      console.log(`[${new Date().toISOString()}] POST /api/games/${gameId}/answer: Incorrect answer - Game ID: ${gameId}, Clue: ${game.currentClue}, User Answer: ${answer}`);
      res.status(400).json({ message: "Incorrect answer. Try again." });
    }
  } catch (error) {
    // Log any errors that occurred during answer submission
    console.error(`[${new Date().toISOString()}] POST /api/games/${gameId}/answer: Error submitting answer - Game ID: ${gameId}, Error:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all available games
const getAllGames = async (req, res) => {
  try {
    // Retrieve all game records from the database
    const games = await Game.find();

    // Log the retrieval of all games
    console.log(`[${new Date().toISOString()}] GET /api/games: All games retrieved - Count: ${games.length}`);

    // Send the list of games as a response to the frontend
    res.status(200).json(games);
  } catch (error) {
    // Log any errors that occurred during game retrieval
    console.error(`[${new Date().toISOString()}] GET /api/games: Error fetching games - Error:`, error);
    res.status(500).json({ error: 'Error fetching games' });
  }
};

module.exports = { startGame, getClue, submitAnswer, getAllGames };