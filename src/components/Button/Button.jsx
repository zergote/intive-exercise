import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

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

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
export default Button;
