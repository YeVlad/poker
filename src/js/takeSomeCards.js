export default function fillHands(much, deck) {
  const cards = [];

  const remainingDeck = [...deck];

  for (let i = 0; i < much; i++) {
    let grabedCard = remainingDeck.shift();
    cards.push(grabedCard);
  }

  return [cards, remainingDeck];
}
