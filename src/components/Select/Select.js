import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

let Select = props => {
  return (
    <select id="blue">
      <optgroup label="Select a country">
        <option selected="selected">Country</option>
      </optgroup>
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Select;
