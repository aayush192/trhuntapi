const mongoose = require('mongoose');

// Define the schema for the Game model
const gameSchema = new mongoose.Schema({
  gameId: { type: String, required: true, unique: true }, // Unique ID for each game
  name: { type: String, required: true }, // Name of the game
  clueCount: { type: Number, required: true }, // Total number of clues in the game
  clues: [
    {
      clue: { type: String, required: true }, // Clue text
      answer: { type: String, required: true } // Correct answer for the clue
    }
  ],
  currentClue: { type: Number, default: 0 } // Index of the current clue the user is on
});

// Create a model based on the schema
const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
