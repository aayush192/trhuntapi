const express = require('express');
const router = express.Router();


const { startGame, getClue, submitAnswer, getAllGames } = require('../controllers/gameController');

router.post('/games', startGame); // ✅ Start a game (Frontend sends { type })
router.post('/game/clue', getClue); // ✅ Get next clue (Frontend sends { sessionId })
router.post('/game/answer', submitAnswer); // ✅ Submit answer (Frontend sends { sessionId, answer })
router.get('/games', getAllGames); // ✅ Get all available games (without clues)


module.exports = router;
