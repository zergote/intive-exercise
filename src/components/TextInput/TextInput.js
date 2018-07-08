import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

let TextInput = props => {
  return <input type="text" placeholder={props.name} />;
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired
};

export default TextInput;
