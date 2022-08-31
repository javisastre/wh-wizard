import React from "react";

import { IInput } from "../../utils/interfaces";

const TextInput = ({
  label,
  name,
  placeholder,
  required,
  min,
  value,
  error,
  handleInput,
  handleError,
}: IInput) => (
  <div className='text-input'>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type='text'
      className={error ? "input-error" : "input-normal"}
      placeholder={placeholder}
      required={required}
      minLength={min}
      value={value}
      onChange={handleInput}
      onBlur={handleError}
    />
    <div className='error-message-container'>
      {error && <p className='error-message'>{error}</p>}
    </div>
  </div>
);

export default TextInput;
