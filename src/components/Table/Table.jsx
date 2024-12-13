import HandCard from "./HandCard/HandCard";
import css from "./Table.module.css";

export default function Table({ firstHand, secondHand }) {
  return (
    <div className={css.play_area}>
      <ul className={css.hand}>
        {secondHand.map((card) => {
          return (
            <HandCard key={card.key} value={card.value} mast={card.mast} />
          );
        })}
      </ul>
      <ul className={css.hand}>
        {firstHand.map((card) => {
          return (
            <HandCard key={card.key} value={card.value} mast={card.mast} />
          );
        })}
      </ul>
    </div>
  );
}
