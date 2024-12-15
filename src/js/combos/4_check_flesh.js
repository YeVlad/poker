export default function check_flesh(hand) {
  let mainMast = hand[0].mast;

  if (hand.every((card) => card.mast == mainMast)) {
    return hand[4].cost;
  }
  return false;
}
