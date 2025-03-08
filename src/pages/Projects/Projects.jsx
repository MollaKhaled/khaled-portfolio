import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function Game() {
  const [word, setWord] = useState("");
  const [wordList, setWordList] = useState([]);
  const [playerId, setPlayerId] = useState("");
  const [players, setPlayers] = useState([]);
  const [scores, setScores] = useState({});
  const [currentTurn, setCurrentTurn] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      setPlayerId(socket.id);
    });

    socket.on("gameState", ({ wordsUsed, currentTurn, scores, players }) => {
      console.log("Current Turn player Id:",players[currentTurn]);
      console.log("Player list",players);
      console.log("My player Id",playerId)
      setWordList(wordsUsed);
      setScores(scores);
      setPlayers(players);
      setCurrentTurn(currentTurn);
      setError("");
    });

    socket.on("invalidWord", (msg) => {
      setError(msg);
    });

    socket.on("gameOver", ({ winner }) => {
      alert(`🎉 Player ${winner} wins! 🎉`);
      window.location.reload();
    });

    return () => {
      socket.disconnect();
    };
  }, [playerId]);

  const submitWord = () => {
    if (players[currentTurn] !== playerId) {
      setError("It's not your turn!");
      if(!word.trim())
      return;
    }

    socket.emit("newWord", { word: word.toLowerCase(), playerId });
    setWord("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 text-yellow-400">Shiritori Game</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
        <h3 className="text-lg font-semibold">
          Turn:{" "}
          <span className={`font-bold ${players[currentTurn] === playerId ? "text-green-400" : "text-red-400"}`}>
            {players[currentTurn] === playerId ? "Your Turn" : "Opponent's Turn"}
          </span>
        </h3>
        <h4 className="mt-2 text-lg">
          Your Score: <span className="text-yellow-300 font-bold">{scores[playerId]}</span>
        </h4>

        {error && <p className="mt-3 text-red-500">{error}</p>}

        <div className="mt-4">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="w-full px-4 py-2 text-black rounded-md focus:ring focus:ring-yellow-500"
            placeholder="Enter a word..."
            disabled={!playerId || players[currentTurn] !== playerId}
          />
          <button
            onClick={submitWord}
            className={`w-full mt-3 py-2 rounded-md text-white font-semibold ${
              players[currentTurn] !== playerId
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600"
            }`}
            disabled={players[currentTurn] !== playerId}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="mt-8 bg-gray-700 p-4 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-bold text-yellow-300">Used Words</h3>
        <ul className="mt-3 space-y-1 text-gray-300">
          {wordList.map((w, index) => (
            <li key={index} className="bg-gray-600 p-2 rounded-md">
              {w}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
