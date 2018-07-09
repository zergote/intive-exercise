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

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    'input-group',
    {
      error: !!error
    },
    className
  );
  /* eslint-enable */
  return (
    <p className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </p>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired
};

export default TextInput;
