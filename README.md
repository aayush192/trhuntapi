```markdown
# Treasure Hunt Game - API and Frontend README

This document provides instructions for setting up and using the Treasure Hunt Game, which includes a backend API and a frontend React application.

## Description

The Treasure Hunt Game consists of a backend API that manages game sessions and clues, and a frontend React application that provides the user interface for playing the game.

**Backend (Node.js/Express):**

* Manages game sessions using `sessionId`.
* Provides endpoints to fetch available games, start a game, retrieve clues, and check answers.
* Stores game progress in memory (for simplicity; a database is recommended for production).

**Frontend (React):**

* Provides a game selection page to choose a game.
* Provides a clue/answer page to display clues and allow users to submit answers.
* Manages game state using React's state management.
* Communicates with the backend API to fetch games, start sessions, retrieve clues, and check answers.

## Prerequisites

* **Backend:**
    * Node.js and npm installed.
* **Frontend:**
    * Node.js and npm installed.

## Setup

### Backend Setup

1.  **Clone the Repository (if applicable):**
    ```bash
    git clone <your-repository-url>
    cd <your-backend-directory>
    ```

2.  **Install Dependencies:**
    ```bash
    npm install express cors
    ```

3.  **Start the Server:**
    ```bash
    node <your-server-file-name>.js
    ```
    (Replace `<your-server-file-name>.js` with the actual name of your server file.)

    The server will start and listen on port 3000 (or the port specified in `process.env.PORT`).

### Frontend Setup

1.  **Clone the Repository (if applicable):**
    ```bash
    git clone <your-repository-url>
    cd <your-frontend-directory>
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    ```bash
    npm start
    ```

    The application will launch in your default web browser at `http://localhost:3000`.

## Usage

1.  **Game Selection:**
    * Open the frontend application in your browser.
    * You will see a list of available games.
    * Click on a game to start it.
2.  **Clue/Answer Page:**
    * After selecting a game, you will be redirected to the clue/answer page.
    * The first clue will be displayed.
    * Enter your answer in the input field and click "Submit".
    * If your answer is correct, the next clue will be displayed.
    * If your answer is incorrect, an error message will be displayed, and you can try again.
    * Continue answering clues until you complete the game.
3.  **Game Completion:**
    * When you complete the game, a completion message will be displayed.
    * You can then return to the game selection page to play another game.

## API Endpoints

**Backend (Node.js/Express):**

* `GET /games`: Fetches a list of available games.
* `POST /game/start/:type`: Starts a new game session and returns a `sessionId`.
* `GET /game/clue/:sessionId`: Retrieves the next clue for the session.
* `POST /game/answer/:sessionId`: Checks the answer and provides the next clue if correct.

## Frontend Components

**React:**

* `GameSelectionPage`: Displays the list of available games and handles game selection.
* `ClueAnswerPage`: Displays clues, handles answer submission, and manages game progress.

## Notes

* This setup uses in-memory data storage for user progress in the backend. For a production environment, consider using a database.
* The frontend communicates with the backend API using HTTP requests.
* The `sessionId` is used to track the game progress. The frontend stores it and sends it with each request to the backend.
* Ensure that the backend server is running before starting the frontend application.
* The frontend assumes that the backend server is running on `http://localhost:3000`. If you are running the backend on a different port, update the API URLs in the frontend code.
* This project can be further enhanced with features like user authentication, persistent game progress, and improved UI/UX.
```
