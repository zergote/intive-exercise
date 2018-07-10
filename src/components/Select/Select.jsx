import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const InputFeedback = ({ error }) =>
  error ? <span className="input-feedback">{error}</span> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

let Select = ({
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
        value={value || 'country'}
        onChange={onChange}
        {...props}
      >
        <optgroup label="Select a country">
          <option value="country" disabled hidden>
            country
          </option>
          {options.map((country, i) => (
            <option key={i}>{country.substr(0, 20)}</option>
          ))}
        </optgroup>
      </select>
      <InputFeedback error={error} />
    </p>
  );
};

InputFeedback.propTypes = {
  error: PropTypes.string
};

Label.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  options: PropTypes.array.isRequired
};

export default Select;
