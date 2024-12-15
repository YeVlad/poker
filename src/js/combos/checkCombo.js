const ppp = [
  {
    value: "2",
    mast: "1",
    cost: 2,
    key: "1,0",
  },
  {
    value: "3",
    mast: "2",
    cost: 2,
    key: "2,1",
  },
  {
    value: "4",
    mast: "3",
    cost: 10,
    key: "2,3",
  },
  {
    value: "5",
    mast: "4",
    cost: 10,
    key: "4,0",
  },
  {
    value: "6",
    mast: "1",
    cost: 14,
    key: "12,0",
  },
];

import check_streetFlesh from "./1_check_streetFlesh";
import check_care from "./2_check_care";
import check_fullHouse from "./3_check_fullHouse";
import check_flesh from "./4_check_flesh";
import check_street from "./5_check_street";
import check_set from "./6_check_set";
import check_doubleDouble from "./7_check_doubleDouble";
import check_double from "./8_check_double";
import takeHigher from "./9_takeHigher";

export default function checkCombo(hand) {
  if (hand.length > 0) {
    if (check_streetFlesh(hand)) {
      return [8, check_streetFlesh(hand)];
    } else if (check_care(hand)) {
      return [7, check_care(hand)];
    } else if (check_fullHouse(hand)) {
      return [6, ...check_fullHouse(hand)];
    } else if (check_flesh(hand)) {
      return [5, check_flesh(hand)];
    } else if (check_street(hand)) {
      return [4, check_street(hand)];
    } else if (check_set(hand)) {
      return [3, check_set(hand)];
    } else if (check_doubleDouble(hand)) {
      return [2, ...check_doubleDouble(hand)];
    } else if (check_double(hand)) {
      return [1, ...check_double(hand)];
    } else {
      return [0, ...takeHigher(hand)];
    }
  }
}
