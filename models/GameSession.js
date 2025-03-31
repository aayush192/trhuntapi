const mongoose = require('mongoose');

const gameSessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  gameId: { type: String, required: true },
  playerId: { type: String, required: true },  // Change this line to String
  currentClueIndex: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
  startedAt: { type: Date, default: Date.now }  // Optional: store when the session started
});

module.exports = mongoose.model('GameSession', gameSessionSchema);
