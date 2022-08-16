import '../style/App.scss';
import React, { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { nanoid } from 'nanoid';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import Card from './Card';
import Scoreboard from './Scoreboard';

import pokemon0 from '../images/0.jpg';
import pokemon1 from '../images/1.jpg';
import pokemon2 from '../images/2.jpg';
import pokemon3 from '../images/3.jpg';
import pokemon4 from '../images/4.jpg';
import pokemon5 from '../images/5.jpg';
import pokemon6 from '../images/6.jpg';
import pokemon7 from '../images/7.jpg';
import pokemon8 from '../images/8.jpg';
import pokemon9 from '../images/9.jpg';

// A memory card game, which is a sinple game of memory.
// You can only click one time on a card or you lose.
// the score keeps track of the number of cards you have clicked.
// the game is over when you click on all the cards.
// the game keeps your max score.

function App() {
  // const emojis = [
  //   {
  //     id: 0,
  //     clicked: false,
  //     content: '🦄',
  //   },
  //   {
  //     id: 1,
  //     clicked: false,
  //     content: '🐶',
  //   },
  //   {
  //     id: 2,
  //     clicked: false,
  //     content: '🐱',
  //   },
  //   {
  //     id: 3,
  //     clicked: false,
  //     content: '🐭',
  //   },
  //   {
  //     id: 4,
  //     clicked: false,
  //     content: '🐹',
  //   },
  //   {
  //     id: 5,
  //     clicked: false,
  //     content: '🐰',
  //   },
  //   {
  //     id: 6,
  //     clicked: false,
  //     content: '🦊',
  //   },
  //   {
  //     id: 7,
  //     clicked: false,
  //     content: '🐻',
  //   },
  //   {
  //     id: 8,
  //     clicked: false,
  //     content: '🐼',
  //   },
  // ];
  const pokemons = [
    {
      id: 0,
      clicked: false,
      content: pokemon0,
    },
    {
      id: 1,
      clicked: false,
      content: pokemon1,
    },
    {
      id: 2,
      clicked: false,
      content: pokemon2,
    },
    {
      id: 3,
      clicked: false,
      content: pokemon3,
    },
    {
      id: 4,
      clicked: false,
      content: pokemon4,
    },
    {
      id: 5,
      clicked: false,
      content: pokemon5,
    },
    {
      id: 6,
      clicked: false,
      content: pokemon6,
    },
    {
      id: 7,
      clicked: false,
      content: pokemon7,
    },
    {
      id: 8,
      clicked: false,
      content: pokemon8,
    },
    {
      id: 9,
      clicked: false,
      content: pokemon9,
    },
  ];
  const tooltip =
    "Click on a card you didn't click before to get a point. Don't click on the same card twice or you lose.";
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

  const [card, setCard] = useState(pokemons);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (e) => {
    let isGameOver = false;
    const { id } = e.target.parentNode;
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
      setCard(randomOrder(pokemons));
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
      <div id="header">
        <div id="help" data-tooltip={tooltip}>
          <Icon icon="bx:help-circle" />
        </div>
        <Scoreboard score={score} highScore={highScore} />
      </div>
      <div className="cards">
        {Object.values(card).map((item) => (
          <Card
            key={nanoid()}
            content={item.content}
            id={item.id}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
