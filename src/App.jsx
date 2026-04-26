import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function App() {
  const [cards, setCards] = useState([]);
  const [clicked, setClicked] = useState(new Set());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    async function fetchCards() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await res.json();

      const formatted = data.results.map((pokemon, index) => ({
        id: index + 1,
        name: pokemon.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
      }));

      setCards(shuffle(formatted));
    }

    fetchCards();
  }, []);

  function handleCardClick(id) {
    if (clicked.has(id)) {
      setScore(0);
      setClicked(new Set());
      setCards((prev) => shuffle(prev));

      return;
    }

    const newClicked = new Set(clicked);
    newClicked.add(id);
    setClicked(newClicked);

    const newScore = score + 1;
    setScore(newScore);

    if (newScore > bestScore) {
      setBestScore(newScore);
    }

    setCards((prev) => shuffle(prev));
  }

  return (
    <div className="app">
      <header>
        <img src="/pokemon.svg" alt="Pokemon Logo" />
        <h1>Memory Card Game</h1>
        <p>
          Score: {score} | Best Score: {bestScore}
        </p>
      </header>
      {score === 12 && (
        <div className="win-message">🎉 You got all 12! Great job!</div>
      )}

      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            img={card.img}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
