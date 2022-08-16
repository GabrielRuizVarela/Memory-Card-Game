/* eslint-disable react/prop-types */
import React from 'react';

function Scoreboard(props) {
  const { score, highScore } = props;
  return (
    <div className="scoreboard">
      <div className="score">
        Score:
        {score}
      </div>
      <div className="highscore">
        Highscore:
        {highScore}
      </div>
    </div>
  );
}

export default Scoreboard;
