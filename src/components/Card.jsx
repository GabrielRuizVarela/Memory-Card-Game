/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function Card(props) {
  const { content, onClick, id } = props;
  return (
    <div className="card" id={id} onMouseDown={onClick}>
      {content}
    </div>
  );
}

export default Card;
