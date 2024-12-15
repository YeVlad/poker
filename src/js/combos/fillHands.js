export default function fillHands(deck) {
  const hand1 = [];
  const hand2 = [];
  const remainingDeck = [...deck];

  for (let i = 0; i < 5; i++) {
    let grabedCard = remainingDeck.shift();
    hand1.push(grabedCard);
    grabedCard = remainingDeck.shift();
    hand2.push(grabedCard);
  }

  return [hand1, hand2, remainingDeck];
}
