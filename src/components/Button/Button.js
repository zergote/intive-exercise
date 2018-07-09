import React from 'react';
import './style.scss';

/* eslint-disable */
let Button = ({ disabled, type, name }) => {
  return (
    <p>
      <label />
      <button type={type} disabled={disabled}>
        {name}
      </button>
    </p>
  );
};

export default Button;
