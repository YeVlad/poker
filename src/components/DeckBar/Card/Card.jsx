import css from "./Card.module.css";
export default function Card({ value, mast }) {
  return (
    <li className={css.one_card}>
      <p className={css.card_text}>{value}</p>
      <p className={css.card_text}>{mast}</p>
    </li>
  );
}
