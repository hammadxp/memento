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

  // Handle card selection

  function handleClick(card) {
    console.log("You clicked a card");

    if (!disabled) {
      firstCard ? setSecondCard(card) : setFirstCard(card);

      // console.log("firstCard: " + firstCard);
      // console.log("secondCard: " + secondCard);
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
    setWins(0);
    setCards(shuffle);
    handleTurn();
  }

  // Used for selection and match handling

  useEffect(() => {
    let pickTimer; // to later clear 'setTimeout' timer

    if (firstCard && secondCard) {
      if (firstCard.path === secondCard.path) {
        console.log("Cards matched!");

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

  useEffect(() => {
    const matchedCards = cards.filter((card) => card.matched);

    if (cards.length === matchedCards.length) {
      alert("You won!");
      setWins(wins + 1);

      setCards(shuffle);
      handleTurn();
    }
  }, [cards, wins]);

  return (
    <>
      <Header wins={wins} handleNewGame={handleNewGame} />
      <div className="grid">
        {cards.map((card) => {
          const { id, path, matched } = card;

          return (
            <Card
              key={id}
              path={path}
              selected={card === firstCard || card === secondCard || matched}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </>
  );
}
