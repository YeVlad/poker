import { useEffect, useState } from "react";
import "./App.css";
import createNewDeck from "./js/createNewDeck.js";
import fillHands from "./js/fillHands.js";
import takeSomeCards from "./js/takeSomeCards.js";

import Table from "./components/table/table.jsx";
import DeckBar from "./components/deckBar/deckBar.jsx";
import checkCombo from "./js/combos/checkCombo.js";

function App() {
  const [firstHand, setFirstHand] = useState([]);
  const [secondHand, setSecondHand] = useState([]);
  const [deck, setDeck] = useState([]);
  const [isDeckShuffled, setIsDeckShuffled] = useState(false);

  const [turn, setTurn] = useState(1);
  const [cardsToChange, setCardsToChange] = useState([]);

  const [situation, setSituation] = useState([]);

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
    setSituation([checkCombo(firstHand), checkCombo(secondHand)]);
  }, [firstHand, secondHand]);

  function clickOnCard(id) {
    setCardsToChange((prev) => {
      if (cardsToChange.findIndex((el) => el == id) == -1) {
        return [id, ...prev];
      } else {
        return prev.filter((el) => el != id);
      }
    });
  }

  function changeHand() {
    if (turn == 1) {
      const newHand = firstHand.filter(
        (card) => !cardsToChange.includes(card.key)
      );

      const [cards, remainingDeck] = takeSomeCards(cardsToChange.length, deck);
      const readyHand = [...cards, ...newHand];
      readyHand.sort((a, b) => a.cost - b.cost);

      setFirstHand(readyHand);
      setDeck(remainingDeck);

      setTurn(2);
      setCardsToChange([]);
    }
    if (turn == 2) {
      const newHand = secondHand.filter(
        (card) => !cardsToChange.includes(card.key)
      );

      const [cards, remainingDeck] = takeSomeCards(cardsToChange.length, deck);
      const readyHand = [...cards, ...newHand];
      readyHand.sort((a, b) => a.cost - b.cost);

      setSecondHand(readyHand);
      setDeck(remainingDeck);

      setTurn(3);
      setCardsToChange([]);
    }
  }

  return (
    <div className="disp">
      <div className="table-container">
        <Table
          firstHand={firstHand}
          secondHand={secondHand}
          turn={turn}
          clickOnCard={clickOnCard}
          cardsToChange={cardsToChange}
          changeHand={changeHand}
          situation={situation}
        />
      </div>
      <div className="deck-container">
        <DeckBar deck={deck} />
      </div>
    </div>
  );
}

export default App;
