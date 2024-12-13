export default function takeHigher(hand) {
  let higher = 0;

  for (let i = 0; i < 5; i++) {
    if (higher < hand[i].cost) {
      higher = hand[i].cost;
    }
  }
  return higher;
}
