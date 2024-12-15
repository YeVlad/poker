import Results from "../Results/Results";
import HandCard from "./HandCard/HandCard";
import css from "./Table.module.css";

export default function Table({
  firstHand,
  secondHand,
  turn,
  clickOnCard,
  cardsToChange,
  changeHand,
  situation,
}) {
  return (
    <div className={css.play_area}>
      <div className={css.player_menu}>
        <ul className={css.hand}>
          {secondHand.map((card) => {
            return (
              <HandCard
                key={card.key}
                id={card.key}
                value={card.value}
                mast={card.mast}
                clickOnCard={clickOnCard}
                cardsToChange={cardsToChange}
              />
            );
          })}
        </ul>
        {turn == 2 && (
          <button className={css.choise_button} onClick={changeHand}>
            {cardsToChange.length == 0 ? "Dont change" : "Change"}
          </button>
        )}
      </div>
      <Results situation={situation} turn={turn} />
      <div className={css.player_menu}>
        <ul className={css.hand}>
          {firstHand.map((card) => {
            return (
              <HandCard
                key={card.key}
                id={card.key}
                value={card.value}
                mast={card.mast}
                clickOnCard={clickOnCard}
                cardsToChange={cardsToChange}
              />
            );
          })}
        </ul>
        {turn == 1 && (
          <button className={css.choise_button} onClick={changeHand}>
            {cardsToChange.length == 0 ? "Dont change" : "Change"}
          </button>
        )}
      </div>
    </div>
  );
}
