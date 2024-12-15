export default function check_care(hand) {
  const count = {};

  hand.forEach((card) => {
    count[card.cost] = (count[card.cost] || 0) + 1;
  });

  const keys = Object.keys(count);

  if (keys.length == 2) {
    const variant1 = count[keys[0]] == 1 && count[keys[1]] == 4;
    const variant2 = count[keys[0]] == 4 && count[keys[1]] == 1;
    if (variant1) {
      return Number(keys[1]);
    } else if (variant2) {
      return Number(keys[0]);
    }
  }
  return false;
}
