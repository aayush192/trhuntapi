# Treasure Hunt API - README

This document provides instructions on how to use the Treasure Hunt API.

## Description

This API provides endpoints for a treasure hunt game. It allows users to:

* Fetch a list of available games.
* Start a new game session.
* Retrieve clues based on their progress.
* Check answers to clues.

## Prerequisites

* Node.js and npm installed.
* Postman or a similar tool for testing API endpoints.

## Setup

1.  **Clone the Repository (if applicable):**
    ```bash
    git clone <your-repository-url>
    cd <your-repository-directory>
    ```

2.  **Install Dependencies:**
    ```bash
    npm install express cors
    ```

3.  **Start the Server:**
    ```bash
    node <your-server-file-name>.js
    ```
    (Replace `<your-server-file-name>.js` with the actual name of your JavaScript file.)

    The server will start and listen on port 3000 (or the port specified in `process.env.PORT`).

## API Endpoints

### 1. Fetch Available Games

* **Method:** `GET`
* **URL:** `/games`
* **Description:** Retrieves a list of available treasure hunt games.
* **Response:**
    ```json
    {
      "status": "success",
      "message": "Request successful",
      "data": [
        {
          "type": 10,
          "title": "Treasure Hunt - Short Challenge",
          "description": "Find the treasure by solving 10 exciting clues.",
          "difficulty": "Easy",
          "category": "Puzzle Adventure"
        },
        {
          "type": 20,
          "title": "Treasure Hunt - Medium Challenge",
          "description": "A thrilling treasure hunt with 20 mind-bending clues.",
          "difficulty": "Medium",
          "category": "Puzzle Adventure"
        },
        {
          "type": 30,
          "title": "Treasure Hunt - Ultimate Challenge",
          "description": "The hardest challenge with 30 difficult clues. Only the best can finish!",
          "difficulty": "Hard",
          "category": "Puzzle Adventure"
        }
      ]
    }
    ```

### 2. Start a Game Session

* **Method:** `POST`
* **URL:** `/game/start/:type` (replace `:type` with 10, 20, or 30)
* **Description:** Starts a new game session for a user.
* **Request Body (JSON):**
    ```json
    {
      "userId": "user123"
    }
    ```
    (Replace `"user123"` with the user's ID.)
* **Response:**
    ```json
    {
      "status": "success",
      "message": "Game 20 started for user user123",
      "data": {}
    }
    ```

### 3. Fetch the Next Clue

* **Method:** `GET`
* **URL:** `/game/clue/:userId` (replace `:userId` with the user's ID)
* **Description:** Retrieves the next clue for the user based on their progress.
* **Response (Clue):**
    ```json
    {
      "status": "success",
      "message": "Request successful",
      "data": {
        "clue": {
          "id": 1,
          "clue": "I have branches but no leaves, trunk, or fruit. What am I?"
        }
      }
    }
    ```
* **Response (Game Completed):**
    ```json
    {
      "status": "success",
      "message": "Game completed",
      "data": {}
    }
    ```

### 4. Check the Answer

* **Method:** `POST`
* **URL:** `/game/answer/:userId` (replace `:userId` with the user's ID)
* **Description:** Checks the user's answer and provides the next clue if the answer is correct.
* **Request Body (JSON):**
    ```json
    {
      "answer": "Bank"
    }
    ```
* **Response (Correct):**
    ```json
    {
      "status": "success",
      "message": "Correct answer!",
      "data": {
        "correct": true
      }
    }
    ```
* **Response (Incorrect):**
    ```json
    {
      "status": "success",
      "message": "Incorrect answer. Try again.",
      "data": {
        "correct": false
      }
    }
    ```

## Error Handling

* The API returns JSON responses with a `status` field (`"success"` or `"error"`), a `message` field, and a `data` field (or `error` field in case of errors).
* Invalid game types or missing user IDs will result in 400 (Bad Request) errors.
* Game sessions that are not found will result in 404 (Not Found) errors.
* Internal server errors will result in 500 (Internal Server Error) responses.

## Example Usage (Postman)

1.  **Fetch Games:**
    * `GET` to `http://localhost:3000/games`

2.  **Start Game:**
    * `POST` to `http://localhost:3000/game/start/20`
    * Body: `{"userId": "user123"}`

3.  **Get Clue:**
    * `GET` to `http://localhost:3000/game/clue/user123`

4.  **Check Answer:**
    * `POST` to `http://localhost:3000/game/answer/user123`
    * Body: `{"answer": "Bank"}`

## Notes

* This API uses in-memory data storage for user progress. In a production environment, consider using a database.
* The `cors` package is used to enable Cross-Origin Resource Sharing.
* The `express.json()` middleware is used to parse JSON request bodies.
* Replace `"user123"` with an actual user identification method.
* Consider adding authentication and authorization for a production application.
