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

    if (variant1 || variant2 || variant3) {
      return true;
    }
  }
  return false;
}
