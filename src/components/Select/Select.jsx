import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';
/* eslint-disable */

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

let Select = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  options,
  ...props
}) => {
  const classes = classnames(
    'input-group',
    {
      error: !!error
    },
    className
  );
  return (
    <p className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <select
        id={id}
        className="select"
        type={type}
        value={value || "country"}
        onChange={onChange}
        {...props}
      >
        <optgroup label="Select a country">
          <option value="country" disabled hidden>
            country
          </option>
          {options.map((country, i) => (
            <option key={i}>{country.substr(0, 21)}</option>
          ))}
        </optgroup>
      </select>
      <InputFeedback error={error} />
    </p>
  );
};

export default Select;
