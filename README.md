Treasure Hunt API
This is a Treasure Hunt API that allows users to play a treasure hunt game with different difficulty levels. It provides a simple backend that serves clues for the game in JSON format.

Features
Three types of games with varying difficulties:

10 Clue Game (Basic)

20 Clue Game (Intermediate)

30 Clue Game (Advanced)

Each game contains a series of clues with answers.

The API provides endpoints to fetch clues based on the game type.

Provides a backend system to handle game logic and clues.

Installation Instructions
Prerequisites
Node.js version 14 or higher (Download and install from Node.js website).

NPM or Yarn (Node package managers).

Step 1: Clone the Repository
First, clone the repository from GitHub:

bash
Copy
git clone https://github.com/your-username/treasure-hunt-api.git
cd treasure-hunt-api
Step 2: Install Dependencies
Use npm or yarn to install the necessary dependencies:

bash
Copy
npm install
or

bash
Copy
yarn install
Step 3: Set Up the Server
You can start the server using the following command:

bash
Copy
npm start
By default, the API will run at http://localhost:3000.

If you want to run the server on a different port, change the port in your server.js file:

javascript
Copy
const port = process.env.PORT || 3000;
API Endpoints
This API provides endpoints to retrieve game clues based on the number of clues in the game.

1. Get 10 Clue Game
Endpoint: /games/10

Method: GET

Description: Fetches the 10-clue treasure hunt game.

Example Request:

http
Copy
GET http://localhost:3000/games/10
Example Response:

json
Copy
{
  "gameType": "10 Clue Game",
  "description": "A fun and challenging treasure hunt game with 10 clues.",
  "clues": [
    { "id": 1, "clue": "I have keys but open no locks. What am I?", "answer": "Piano" },
    { "id": 2, "clue": "I speak without a mouth and hear without ears. What am I?", "answer": "Echo" },
    { "id": 3, "clue": "I am tall when I am young and short when I am old. What am I?", "answer": "Candle" },
    { "id": 4, "clue": "What has a head, a tail, but no body?", "answer": "Coin" },
    { "id": 5, "clue": "What can travel around the world while staying in the corner?", "answer": "Stamp" },
    { "id": 6, "clue": "What has an eye but cannot see?", "answer": "Needle" },
    { "id": 7, "clue": "What is full of holes but still holds a lot of weight?", "answer": "Sieve" },
    { "id": 8, "clue": "What comes once in a minute, twice in a moment, but never in a thousand years?", "answer": "Letter M" },
    { "id": 9, "clue": "What has a face and two hands but no arms or legs?", "answer": "Clock" },
    { "id": 10, "clue": "What gets wetter as it dries?", "answer": "Towel" }
  ]
}
2. Get 20 Clue Game
Endpoint: /games/20

Method: GET

Description: Fetches the 20-clue treasure hunt game.

Example Request:

http
Copy
GET http://localhost:3000/games/20
Example Response:

json
Copy
{
  "gameType": "20 Clue Game",
  "description": "A more challenging treasure hunt with 20 clues.",
  "clues": [
    { "id": 1, "clue": "I am not alive, but I grow; I don’t have lungs, but I need air. What am I?", "answer": "Fire" },
    { "id": 2, "clue": "I have cities, but no houses. I have forests, but no trees. I have rivers, but no water. What am I?", "answer": "Map" },
    { "id": 3, "clue": "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?", "answer": "Pencil" },
    { "id": 4, "clue": "The more of this there is, the less you see. What is it?", "answer": "Darkness" },
    { "id": 5, "clue": "I can be cracked, I can be made, I can be told, I can be played. What am I?", "answer": "Joke" },
    { "id": 6, "clue": "What has a head, a tail, is brown, and has no legs?", "answer": "Penny" },
    { "id": 7, "clue": "What has one eye but can’t see?", "answer": "Needle" },
    { "id": 8, "clue": "What is the beginning of the end, the end of time and space, the beginning of every end, and the end of every place?", "answer": "Letter E" },
    { "id": 9, "clue": "What comes down but never goes up?", "answer": "Rain" },
    { "id": 10, "clue": "What can be cracked, made, told, and played?", "answer": "Joke" },
    { "id": 11, "clue": "What is light as a feather, yet the strongest man can't hold it for more than 5 minutes?", "answer": "Breath" },
    { "id": 12, "clue": "What gets wetter the more it dries?", "answer": "Towel" },
    { "id": 13, "clue": "I can be long, or I can be short. I can be grown, or I can be bought. I can be painted or left bare. I can be round or square. What am I?", "answer": "Nail" },
    { "id": 14, "clue": "What belongs to you, but other people use it more than you do?", "answer": "Your name" },
    { "id": 15, "clue": "I am always in front of you, but can never be seen. What am I?", "answer": "Future" },
    { "id": 16, "clue": "The more you take, the more you leave behind. What am I?", "answer": "Footsteps" },
    { "id": 17, "clue": "What can you catch but never throw?", "answer": "Cold" },
    { "id": 18, "clue": "I am not alive, but I grow. What am I?", "answer": "Crystal" },
    { "id": 19, "clue": "What has a neck but no head?", "answer": "Bottle" },
    { "id": 20, "clue": "I have a heart that doesn't beat. What am I?", "answer": "Artichoke" }
  ]
}
3. Get 30 Clue Game
Endpoint: /games/30

Method: GET

Description: Fetches the 30-clue treasure hunt game.

Example Request:

http
Copy
GET http://localhost:3000/games/30
Example Response:

json
Copy
