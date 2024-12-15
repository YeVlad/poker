export default function check_fullHouse(hand) {
  const count = {};

  hand.forEach((card) => {
    count[card.cost] = (count[card.cost] || 0) + 1;
  });

  const keys = Object.keys(count);

  if (keys.length == 2) {
    const variant1 = count[keys[0]] == 2 && count[keys[1]] == 3;
    const variant2 = count[keys[0]] == 3 && count[keys[1]] == 2;
    if (variant1) {
      return [Number(keys[1]), Number(keys[0])];
    } else if (variant2) {
      return [Number(keys[0]), Number(keys[1])];
    }
  }
  return false;
}
