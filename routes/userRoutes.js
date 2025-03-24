const express = require("express");
const router = express.Router();

// 📌 Start a New Game for a User
router.post("/start-game", async (req, res) => {
  try {
    const { username, gameId } = req.body;

    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ error: "Game not found" });

    let user = await User.findOne({ username });
    if (!user) {
      user = new User({ username, activeGame: gameId, progress: 0 });
    } else {
      user.activeGame = gameId;
      user.progress = 0;
    }

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
