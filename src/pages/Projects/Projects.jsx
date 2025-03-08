import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";
import axios from "axios";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

let wordsUsed = [];
let currentTurn = 0;
let players = [];
let scores = {};

// Function to check if a word is valid using a dictionary API
const isValidWord = async (word) => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return response.data.length > 0;
  } catch (error) {
    return false;
  }
};

// Handle WebSocket connections
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Add player if not already registered
  if (!players.includes(socket.id)) {
    players.push(socket.id);
    scores[socket.id] = 100; // Starting score
  }

  socket.emit("gameState", { wordsUsed, currentTurn, scores, players });

  socket.on("newWord", async ({ word, playerId }) => {
    if (wordsUsed.includes(word)) {
      socket.emit("invalidWord", "Word has already been used!");
      return;
    }

    if (wordsUsed.length > 0 && word[0] !== wordsUsed[wordsUsed.length - 1].slice(-1)) {
      socket.emit("invalidWord", "Word must start with the last letter of the previous word!");
      return;
    }

    if (word.length < 4) {
      socket.emit("invalidWord", "Word must be at least 4 letters!");
      return;
    }

    if (!(await isValidWord(word))) {
      socket.emit("invalidWord", "Word is not in the dictionary!");
      return;
    }

    // Add word to list
    wordsUsed.push(word);

    // Calculate score: Length Bonus + Speed Bonus
    const lengthBonus = word.length - 4;
    const speedBonus = 5; // Placeholder (can integrate real-time timer)
    scores[playerId] -= lengthBonus + speedBonus;

    // Check if the player has won
    if (scores[playerId] <= 0) {
      io.emit("gameOver", { winner: playerId });
      wordsUsed = [];
      scores = {};
      players = [];
      return;
    }

    // Switch turn
    currentTurn = (currentTurn + 1) % players.length;

    io.emit("gameState", { wordsUsed, currentTurn, scores, players });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    players = players.filter((p) => p !== socket.id);
    delete scores[socket.id];
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
