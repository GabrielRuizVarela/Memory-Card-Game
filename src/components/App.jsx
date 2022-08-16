import '../style/App.scss';
import React, { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { nanoid } from 'nanoid';
import Card from './Card';
import Scoreboard from './Scoreboard';

// A memory card game, which is a sinple game of memory.
// You can only click one time on a card or you lose.
// the score keeps track of the number of cards you have clicked.
// the game is over when you click on all the cards.
// the game keeps your max score.

function App() {
  const initialValues = [
    {
      id: 0,
      clicked: false,
      content: '🦄',
    },
    {
      id: 1,
      clicked: false,
      content: '🐶',
    },
    {
      id: 2,
      clicked: false,
      content: '🐱',
    },
    {
      id: 3,
      clicked: false,
      content: '🐭',
    },
    {
      id: 4,
      clicked: false,
      content: '🐹',
    },
    {
      id: 5,
      clicked: false,
      content: '🐰',
    },
    {
      id: 6,
      clicked: false,
      content: '🦊',
    },
    {
      id: 7,
      clicked: false,
      content: '🐻',
    },
    {
      id: 8,
      clicked: false,
      content: '🐼',
    },
  ];

  function randomOrder(array) {
    const newCard = [...array];
    const randomIndex = [];
    while (randomIndex.length < newCard.length) {
      const randomInt = Math.floor(Math.random() * newCard.length);
      if (!randomIndex.includes(randomInt)) {
        randomIndex.push(randomInt);
      }
      if (randomIndex.length === newCard.length) {
        break;
      }
    }
    const scrambledCards = [];
    randomIndex.forEach((index) => {
      scrambledCards.push(newCard[index]);
    });
    return scrambledCards;
  }

  const [card, setCard] = useState(initialValues);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (e) => {
    let isGameOver = false;
    const { id } = e.target;
    const newCard = card.map((key) => {
      if (Number(key.id) === Number(id) && !key.clicked) {
        // eslint-disable-next-line no-param-reassign
        key.clicked = true;
      } else if (Number(key.id) === Number(id) && key.clicked) {
        isGameOver = true;
      }
      return key;
    });
    if (isGameOver) {
      setScore(0);
      setCard(randomOrder(initialValues));
      return;
    }

    const randomCards = randomOrder(newCard);
    setCard(randomCards);
    setScore(score + 1);
    if (score >= highScore) setHighScore(score + 1);
  };
  useEffect(() => {
    setCard(randomOrder(card));
  }, []);

  return (
    <div className="app">
      <Scoreboard score={score} highScore={highScore} />
      {Object.values(card).map((item) => (
        <Card
          key={nanoid()}
          content={item.content}
          id={item.id}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default App;
