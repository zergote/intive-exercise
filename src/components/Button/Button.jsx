import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

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

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  persons: PropTypes.array.isRequired,
  savePersonsRequesting: PropTypes.func.isRequired
};
export default Button;
