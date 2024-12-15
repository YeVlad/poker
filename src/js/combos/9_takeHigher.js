export default function takeHigher(hand) {
  return [hand[4].cost, hand[3].cost, hand[2].cost, hand[1].cost, hand[0].cost];
}
