import { useEffect, useState } from "react";
import Card from "./components/Card";
import shuffle from "./utilities/shuffle";

export default function App() {
  const [cards, setCards] = useState(shuffle); // is an array of image paths
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);

  function handleClick(card) {
    console.log("Hi");

    if (!disabled) {
      // card.selected = true;
      firstCard ? setSecondCard(card) : setFirstCard(card);

      if (firstCard.path === secondCard.path) {
        card.matched = true;
      }

      console.log(card);

      // useEffect(() => {
      //   card.selected = true;
      // }, [firstCard, secondCard]);

      // if (firstCard.path === secondCard.path) {
      //   firstCard.matched = true;
      //   secondCard.matched = true;
      // }

      setCards((oldCards) => {
        const newCards = oldCards.map((card) => {
          return {
            ...card,
            matched: true,
          };
        });
      });
    }
  }

  return (
    <div className="grid">
      {cards.map((card) => {
        const { id, path, matched } = card;

        return (
          <Card
            key={id}
            path={path}
            selected={card === firstCard || card === secondCard || matched}
            onClick={() => handleClick(card)}
          />
        );
      })}
    </div>
  );
}
