const ppp = [
  {
    value: "3",
    mast: "1",
    cost: 3,
    key: "1,0",
  },
  {
    value: "2",
    mast: "2",
    cost: 2,
    key: "2,1",
  },
  {
    value: "6",
    mast: "3",
    cost: 6,
    key: "2,3",
  },
  {
    value: "5",
    mast: "10",
    cost: 5,
    key: "4,0",
  },
  {
    value: "9",
    mast: "24",
    cost: 9,
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
      console.log("streetFlesh");
    } else if (check_care(hand)) {
      console.log("care");
    } else if (check_fullHouse(hand)) {
      console.log("fullHouse");
    } else if (check_flesh(hand)) {
      console.log("flesh");
    } else if (check_street(hand)) {
      console.log("street");
    } else if (check_set(hand)) {
      console.log("set");
    } else if (check_doubleDouble(hand)) {
      console.log("doubleDouble");
    } else if (check_double(hand)) {
      console.log("double");
    } else {
      console.log(takeHigher(hand));
    }
  }
}
