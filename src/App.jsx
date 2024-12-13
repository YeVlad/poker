import { useEffect, useState } from "react";
import "./App.css";
import createNewDeck from "./js/createNewDeck.js";
import fillHands from "./js/fillHands.js";
import Table from "./components/table/table.jsx";
import DeckBar from "./components/deckBar/deckBar.jsx";
import checkCombo from "./js/combos/checkCombo.js";

function App() {
  const [firstHand, setFirstHand] = useState([]);
  const [secondHand, setSecondHand] = useState([]);
  const [deck, setDeck] = useState([]);
  const [isDeckShuffled, setIsDeckShuffled] = useState(false);

  useEffect(() => {
    const newDeck = createNewDeck(52);
    setDeck(newDeck);
  }, []);

  useEffect(() => {
    if (!isDeckShuffled && deck.length > 0) {
      const [hand1, hand2, remainingDeck] = fillHands(deck);

      hand1.sort((a, b) => a.cost - b.cost);
      hand2.sort((a, b) => a.cost - b.cost);

      setFirstHand(hand1);
      setSecondHand(hand2);
      setDeck(remainingDeck);
      setIsDeckShuffled(true);
    }
  }, [deck, isDeckShuffled]);

  useEffect(() => {
    console.log("first hand");
    checkCombo(firstHand);
    console.log("second hand");
    checkCombo(secondHand);
  }, [firstHand]);

  return (
    <div className="disp">
      <div className="table-container">
        <Table firstHand={firstHand} secondHand={secondHand} />
      </div>
      <div className="deck-container">
        <DeckBar deck={deck} />
      </div>
    </div>
  );
}

export default App;
