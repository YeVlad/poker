export default function check_street(hand) {
  let currentChecker = hand[0];
  let proof = 1;
  for (let i = 1; i < 5; i++) {
    if (hand[i].cost - currentChecker.cost == 1) {
      proof = proof + 1;
      currentChecker = hand[i];
    } else {
      return false;
    }
  }
  return proof == 5 ? true : false;
}