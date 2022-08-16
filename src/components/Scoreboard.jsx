import React from 'react';

function Scoreboard(props) {
  const { score, highScore } = props;
  return (
    <div className="scoreboard">
      <div className="score">
        <p>
          Score:
          {score}
        </p>
      </div>
      <div className="highscore">
        <p>
          Highscore:
          {highScore}
        </p>
      </div>
    </div>
  );
}

export default Scoreboard;
