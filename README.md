# 🏆 Treasure Hunt Game - API & Frontend

Welcome to the **Treasure Hunt Game**! 🗺️ This project consists of a **backend API** (Node.js/Express) and a **frontend React application** that creates an interactive treasure hunt experience. Players solve clues to progress through the game and uncover hidden treasures. Ready for the adventure? Let’s get started! 🎉

## 🕹️ Game Overview

The **Treasure Hunt Game** is split into two key parts:

### 🔙 Backend (Node.js/Express)
- Manages game sessions using `sessionId`.
- Provides essential API endpoints to:
  - Fetch available games.
  - Start a new game session.
  - Retrieve clues.
  - Check answers.
- Stores game progress **in-memory** (for simplicity; a database is recommended for production).  

### 🎨 Frontend (React)
- Displays a **game selection page** where players can choose a treasure hunt.
- Presents **clues** and accepts **user-submitted answers**.
- Manages game state using **React hooks**.
- Communicates with the backend API to fetch games, start sessions, retrieve clues, and verify answers.

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
In the frontend, make sure the API URLs match your backend setup. For example:

#### API Endpoints

1. **Start a Game Session**

   **Endpoint:** `POST /api/game/start`
   
   **Request Body:**
   ```json
   {
     "gameId": "GH-10",
     "playerId": "sandesh"
   }
   ```
   
   **Response:**
   ```json
   {
     "sessionId": "abcd-1234-xyz-5678",
     "gameSession": { ... }
   }
   ```

2. **Get Next Clue**

   **Endpoint:** `POST /api/game/clue`
   
   **Request Body:**
   ```json
   {
     "sessionId": "abcd-1234-xyz-5678",
     "gameId": "GH-10"
   }
   ```
   
   **Response:**
   ```json
   {
     "clue": "Find the golden key near the oak tree."
   }
   ```

3. **Get All Games (without clues)**

   **Endpoint:** `GET /api/game`

   **Response:**
   ```json
   [
     { "gameId": "GH-10", "name": "Pirate Adventure" },
     { "gameId": "GH-20", "name": "Space Expedition" }
   ]
   ```

---

## 🚀 Future Enhancements
📌 **User Authentication** – Track individual player progress.  
📌 **Persistent Game Progress** – Use a **database** (e.g., MongoDB) instead of in-memory storage.  
📌 **Leaderboard & Scoring** – Add a ranking system based on player performance.  
📌 **Improved UI/UX** – Integrate animations, sound effects, and other immersive features.  

---

## 🛠 Technologies Used

| Tech Stack             | Description                                    |
|------------------------|------------------------------------------------|
| **Node.js & Express.js** | Backend framework for API development.         |
| **React.js**            | Frontend framework for the game interface.     |
| **MongoDB & Mongoose** _(Future Enhancement)_ | Database for storing game sessions & progress. |
| **UUID**                | Generates unique session IDs.                  |

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
```
