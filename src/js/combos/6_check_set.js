export default function check_set(hand) {
  const count = {};

  hand.forEach((card) => {
    count[card.cost] = (count[card.cost] || 0) + 1;
  });

  const keys = Object.keys(count);

  if (keys.length == 3) {
    const variant1 = count[keys[0]] == 3;
    const variant2 = count[keys[1]] == 3;
    const variant3 = count[keys[2]] == 3;

    if (variant1) {
      return Number(keys[0]);
    }
    if (variant2) {
      return Number(keys[1]);
    }
    if (variant3) {
      return Number(keys[2]);
    }
  }
  return false;
}
