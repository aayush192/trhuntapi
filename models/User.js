const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true }, // Username of the user
  activeGame: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' }, // Reference to the active game the user is playing
  score: { type: Number, default: 0 } // Score of the user, initially set to 0
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);
module.exports = User;
