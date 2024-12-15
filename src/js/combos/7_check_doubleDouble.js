export default function check_doubleDouble(hand) {
  const count = {};

  hand.forEach((card) => {
    count[card.cost] = (count[card.cost] || 0) + 1;
  });

  const keys = Object.keys(count);

  if (keys.length == 3) {
    const variant1 = count[keys[0]] == 2;
    const variant2 = count[keys[1]] == 2;
    const variant3 = count[keys[2]] == 2;

    const arr = [];
    let lastCard;

    if (variant1) {
      arr.push(Number(keys[0]));
    } else {
      lastCard = Number(keys[0]);
    }
    if (variant2) {
      arr.push(Number(keys[1]));
    } else {
      lastCard = Number(keys[1]);
    }
    if (variant3) {
      arr.push(Number(keys[2]));
    } else {
      lastCard = Number(keys[2]);
    }
    arr.sort((a, b) => b - a);
    arr.push(lastCard);

    return arr;
  }
  return false;
}
