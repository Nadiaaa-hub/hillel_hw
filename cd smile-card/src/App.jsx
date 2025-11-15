import { useState } from "react";
import "./App.css";
import SmileCard from "./components/SmileCard";

function App() {
  const [smiles, setSmiles] = useState([]);
  const [winner, setWinner] = useState();

  const loadData = async () => {
    try {
      const response = await fetch("/data.json");
      const result = await response.json();
      setSmiles(result);
    } catch (error) {
      console.error(error);
    }
  };

  const increaseVote = (id) => {
    setSmiles(
      smiles.map((item) =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      )
    );
  };

  const showWinner = () => {
    if (smiles.length === 0) return;
    const winner = smiles.reduce(
      (max, smile) => (smile.votes > max.votes ? smile : max),
      smiles[0]
    );
    setWinner(winner);
  };

  return (
    <div className="App">
      <h1>Vote for your favorite smile</h1>
      <button onClick={loadData}>Load Smiles</button>
      <button onClick={showWinner}>Show Results</button>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {smiles.map((smile) => (
          <SmileCard
            key={smile.id}
            id={smile.id}
            emoji={smile.emoji}
            votes={smile.votes}
            increaseVote={() => increaseVote(smile.id)}
          />
        ))}
      </div>

      {winner && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          Winner: {winner.emoji} with {winner.votes} votes
        </p>
      )}
    </div>
  );
}

export default App;
