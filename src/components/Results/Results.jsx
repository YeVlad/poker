import compareHands from "../../js/compareHands.js";
import css from "./Results.module.css";

export default function Results({ situation, turn }) {
  let so = 0;
  if (turn == 3) {
    so = compareHands(situation[0], situation[1]);
  }
  return (
    <div className={css.mid_table}>
      <h2 className={css.combo_name}>{situation[1]}</h2>
      {so ? (
        <h1 className={css.result}>
          {so == 1 ? "1P won" : so == 2 ? "2P won" : "TIE"}
        </h1>
      ) : (
        " "
      )}

      <h2 className={css.combo_name}>{situation[0]}</h2>
    </div>
  );
}
