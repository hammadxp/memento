import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import shuffle from "./utilities/shuffle";

export default function App() {
  const [cards, setCards] = useState(shuffle);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [wins, setWins] = useState(0);
  const [heading, setHeading] = useState("Memento (Memory Game)");

  // Handle card selection

  function handleClick(card) {
    if (!disabled) {
      firstCard ? setSecondCard(card) : setFirstCard(card);
    }
  }

  // Handle turn

  function handleTurn() {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  }

  // Handle new game

  function handleNewGame() {
    setHeading("Memento (Memory Game)");

    setCards(shuffle);
    handleTurn();
  }

  // Handle cards match

  useEffect(() => {
    let pickTimer; // to later clear 'setTimeout' timer

    if (firstCard && secondCard) {
      if (firstCard.path === secondCard.path) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.path === firstCard.path) {
              return {
                ...card,
                matched: true,
              };
            } else {
              return card;
            }
          });
        });

        handleTurn();
      } else {
        setDisabled(true);

        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    return () => {
      clearTimeout(pickTimer);
    };
  }, [cards, firstCard, secondCard, wins]);

  // Handle all cards matched

  useEffect(() => {
    const matchedCards = cards.filter((card) => card.matched);

    if (cards.length === matchedCards.length) {
      setWins((wins) => wins + 1);
      setHeading("You won!");
    }
  }, [cards]);

  // Component content

  return (
    <>
      <Header wins={wins} heading={heading} handleNewGame={handleNewGame} />
      <div className="grid">
        {cards.map((card) => {
          const { id, path, matched } = card;

          return (
            <Card
              key={id}
              path={path}
              selected={card === firstCard || card === secondCard || matched}
              card={card}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </>
  );
}
