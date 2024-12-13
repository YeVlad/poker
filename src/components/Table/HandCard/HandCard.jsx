import css from "./HandCard.module.css";

export default function HandCard({ value, mast }) {
  return (
    <li className={css.hand_card}>
      <p className={css.hand_card_text}>{value}</p>
      <p className={css.hand_card_text}>{mast}</p>
    </li>
  );
}
