export default function compareHands(hand1, hand2) {
  for (let i = 0; i < hand1.length; i++) {
    if (hand1[i] > hand2[i]) {
      return 1;
    }
    if (hand1[i] < hand2[i]) {
      return 2;
    }
  }
  return -1;
}
