import css from "./DeckBar.module.css";
import Card from "./Card/Card";

export default function DeckBar({ deck }) {
  return (
    <ul className={css.fine_deck}>
      {deck.map((card) => (
        <Card key={card.key} value={card.value} mast={card.mast} />
      ))}
    </ul>
  );
}
