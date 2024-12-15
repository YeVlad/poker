export default function check_streetFlesh(hand) {
  let mainMast = hand[0].mast;

  if (hand.every((card) => card.mast == mainMast)) {
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

    return proof == 5 ? currentChecker.cost : false;
  }
  return false;
}
