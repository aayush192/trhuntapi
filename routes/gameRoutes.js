const express = require('express');
const router = express.Router();
const { startGame, getClue, submitAnswer, getAllGames } = require('../controllers/gameController'); // ✅ Check this line

router.post('/games', startGame); // ✅ Make sure startGame is defined
router.post('/game/clue', getClue); // ✅ Make sure getClue is defined
router.post('/game/answer', submitAnswer); // ✅ Make sure submitAnswer is defined
router.get('/games', getAllGames); // ✅ Make sure getAllGames is defined

module.exports = router;
