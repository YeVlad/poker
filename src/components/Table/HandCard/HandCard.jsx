import css from "./HandCard.module.css";
import classNames from "classnames";

export default function HandCard({
  value,
  mast,
  id,
  clickOnCard,
  cardsToChange,
}) {
  return (
    <li
      className={classNames(css.hand_card, {
        [css.selected]: cardsToChange.includes(id),
      })}
      onClick={() => clickOnCard(id)}
    >
      <p className={css.hand_card_text}>{value}</p>
      <p className={css.hand_card_text}>{mast}</p>
    </li>
  );
}
