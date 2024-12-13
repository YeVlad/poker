export default function createDeck(amount, numbers, masti) {
  let startOfDeck;
  if (amount == 52) {
    startOfDeck = 0;
  } else {
    startOfDeck = 7;
  }
  let deck = [];
  for (let I = startOfDeck; I < numbers.length; I++) {
    for (let II = 0; II < masti.length; II++) {
      deck.push({
        value: numbers[I],
        mast: masti[II],
        cost: I + 2,
        key: `${I},${II}`,
      });
    }
  }
  return deck;
}
