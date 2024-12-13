import createDeck from "./minicodes/createDeck";
import shuffleDeck from "./minicodes/shuffleDeck";

export default function createNewDeck(amountOfCards) {
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const masti = ["♠", "♢", "♣", "♡"];
  let deck = createDeck(amountOfCards, numbers, masti);
  deck = shuffleDeck(deck);

  return deck;
}
