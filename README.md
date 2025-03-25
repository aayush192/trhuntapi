

# 🏆 Treasure Hunt Game - API & Frontend

Welcome to the **Treasure Hunt Game**! 🗺️ This project consists of a **backend API** (Node.js/Express) and a **frontend React application** to create an interactive treasure hunt experience where players solve clues to progress.  

## 🕹️ Game Overview

The **Treasure Hunt Game** is divided into two main parts:

### 🔙 Backend (Node.js/Express)
- Manages game sessions using `sessionId`.
- Provides API endpoints to:
  - Fetch available games.
  - Start a new game session.
  - Retrieve clues.
  - Check answers.
- Stores game progress **in-memory** (for simplicity; a database is recommended for production).  

### 🎨 Frontend (React)
- Displays a **game selection page** where players can choose a treasure hunt.
- Shows **clues** and accepts **user-submitted answers**.
- Manages game state using **React hooks**.
- Interacts with the backend API to fetch games, start sessions, retrieve clues, and verify answers.  

---

## ⚙️ Prerequisites

### Backend Requirements:
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Frontend Requirements:
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

---

## 🚀 Setup Instructions

### 🔧 Backend Setup

1️⃣ **Clone the repository** (if applicable):
   ```bash
   git clone <your-repository-url>
   cd <your-backend-directory>
   ```

2️⃣ **Install dependencies**:
   ```bash
   npm install express cors
   ```

3️⃣ **Start the server**:
   ```bash
   node <your-server-file-name>.js
   ```
   _(Replace `<your-server-file-name>.js` with the actual name of your server file.)_

4️⃣ The server will run on **port 5000** by default (`http://localhost:5000`). If running on another port, update the frontend accordingly.

### 🖥️ Frontend Setup

1️⃣ **Clone the repository** (if applicable):
   ```bash
   git clone <your-repository-url>
   cd <your-frontend-directory>
   ```

2️⃣ **Install dependencies**:
   ```bash
   npm install
   ```

3️⃣ **Start the frontend application**:
   ```bash
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`.

---

## ⚙️ Configuration

### **Backend URL Configuration (Frontend)**
In the frontend, ensure API URLs match your backend setup. Example:

```javascript
const API_URL = 'http://localhost:5000/api'; // Adjust if backend is running on another port
```

### Example API Calls:
```javascript
fetch(`${API_URL}/games`);
fetch(`${API_URL}/game/start/:type`);
fetch(`${API_URL}/game/clue/:sessionId`);
fetch(`${API_URL}/game/answer/:sessionId`);
```

---

## 🎮 How to Play

1️⃣ **Game Selection:**
   - Open the frontend application in your browser.
   - A list of available treasure hunts will be displayed.
   - Click on a game to start your adventure.  

2️⃣ **Clue/Answer Phase:**
   - Your first **clue** appears.
   - Type your answer in the input field and hit **Submit**.
   - If correct ✅ → The next clue appears.
   - If incorrect ❌ → Try again until you get it right.

3️⃣ **Game Completion:**
   - After solving all clues, a **success message** appears.
   - You can restart or select another treasure hunt.

---

## 📌 API Endpoints

### 1️⃣ Fetch Available Games  
   **Endpoint:** `GET /api/games`  
   **Response Example:**
   ```json
   [
     {
       "sessionId": "1234-5678-91011",
       "type": "easy",
       "clueCount": 10
     }
   ]
   ```

### 2️⃣ Start a New Game  
   **Endpoint:** `POST /api/game/start/:type`  
   **Request Body Example:**
   ```json
   {
     "clueCount": 10,
     "clues": [
       { "question": "What has to be broken before you use it?", "answer": "Egg" },
       { "question": "I speak without a mouth and hear without ears. What am I?", "answer": "Echo" }
     ],
     "username": "player1"
   }
   ```
   **Response Example:**
   ```json
   { "sessionId": "abcd-efgh-ijkl" }
   ```

### 3️⃣ Get the Next Clue  
   **Endpoint:** `GET /api/game/clue/:sessionId`  
   **Response Example:**
   ```json
   { "clue": { "question": "What has keys but can't open locks?", "answer": "Piano" } }
   ```

### 4️⃣ Submit an Answer  
   **Endpoint:** `POST /api/game/answer/:sessionId`  
   **Request Body Example:**
   ```json
   { "answer": "Piano" }
   ```
   **Responses:**
   ✅ **Correct Answer:**
   ```json
   { "message": "Correct! Here's the next clue." }
   ```
   ❌ **Wrong Answer:**
   ```json
   { "message": "Incorrect answer. Try again." }
   ```

---

## 🔧 Frontend Components

### **React Components:**
- **`GameSelectionPage`** – Displays available treasure hunts.
- **`ClueAnswerPage`** – Shows clues, handles answers, and tracks progress.

---

## ⚠️ Important Notes
- The backend stores **game progress in memory**. For **persistent data**, consider using a **database**.
- Ensure the **backend server** is running before launching the **frontend**.
- The **frontend assumes** the backend runs at `http://localhost:5000`. If using a different port, update API URLs.

---

## 🚀 Future Enhancements
📌 **User Authentication** – Track individual player progress.  
📌 **Persistent Game Progress** – Use a **database** instead of in-memory storage.  
📌 **Leaderboard & Scoring** – Show rankings based on performance.  
📌 **Improved UI/UX** – Add animations and sound effects for a more immersive experience.  

---

## 🛠 Technologies Used

| Tech Stack | Description |
|------------|------------|
| **Node.js & Express.js** | Backend framework for API development. |
| **React.js** | Frontend framework for the game interface. |
| **MongoDB & Mongoose** _(Future Enhancement)_ | Database for storing game sessions & progress. |
| **UUID** | Generates unique session IDs. |

---

## 🤝 Contributing

Contributions are welcome! To contribute:  
1. Fork this repository 🍴  
2. Create a new branch: `git checkout -b feature-branch`  
3. Commit changes: `git commit -m "Add new feature"`  
4. Push to your branch: `git push origin feature-branch`  
5. Open a Pull Request ✅  

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute.

---

💡 **Enjoy the game and happy treasure hunting!** 🏴‍☠️✨

