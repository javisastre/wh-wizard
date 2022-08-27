import React from "react";
import { IInput } from "../utils/interfaces";

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
  <>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type='text'
      placeholder={placeholder}
      required={required}
      minLength={min}
      value={value}
      onChange={handleInput}
      onBlur={handleError}
    />
    {error && <p className='error-message'>{error}</p>}
  </>
);

export default TextInput;
