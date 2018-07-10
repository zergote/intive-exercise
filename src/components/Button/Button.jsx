import React from 'react';
import './style.scss';

/* eslint-disable */
let Button = ({ disabled, type, name, persons, savePersonsRequesting }) => {
  return (
    <p>
      <label />
      <button
        type={type}
        disabled={disabled}
        onClick={savePersonsRequesting.bind(null, persons)}
      >
        {name}
      </button>
    </p>
  );
};

export default Button;
