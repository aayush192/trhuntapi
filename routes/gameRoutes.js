const express = require('express');
const { startGame, getClue, submitAnswer, getAllGames } = require('../controllers/gameController');
const router = express.Router();

// Route to start a new game and create the game session
router.post('/games', startGame);

// Route to retrieve the next clue in a specific game
router.get('/games/:gameId/clues', getClue);

// Route to submit an answer for a clue in a specific game
router.post('/games/:gameId/answer', submitAnswer);

// Route to get all games available in the database
router.get('/games', getAllGames);

module.exports = router;
