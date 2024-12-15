export default function check_double(hand) {
  const count = {};

  hand.forEach((card) => {
    count[card.cost] = (count[card.cost] || 0) + 1;
  });

  const keys = Object.keys(count);

  if (keys.length == 4) {
    const variant1 = count[keys[0]] == 2;
    const variant2 = count[keys[1]] == 2;
    const variant3 = count[keys[2]] == 2;
    const variant4 = count[keys[3]] == 2;

    const arr = [];
    const addArr = [];
    if (variant1) {
      arr.push(Number(keys[0]));
    } else {
      addArr.push(Number(keys[0]));
    }
    if (variant2) {
      arr.push(Number(keys[1]));
    } else {
      addArr.push(Number(keys[1]));
    }
    if (variant3) {
      arr.push(Number(keys[2]));
    } else {
      addArr.push(Number(keys[2]));
    }
    if (variant3) {
      arr.push(Number(keys[3]));
    } else {
      addArr.push(Number(keys[3]));
    }

    addArr.sort((a, b) => b - a);

    const finArr = arr.concat(addArr);
    return finArr;
  }
  return false;
}
