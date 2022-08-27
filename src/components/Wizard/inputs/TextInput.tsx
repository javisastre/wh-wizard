import React from "react";
import { ITextInput } from "../utils/interfaces";

const TextInput = ({
  label,
  name,
  placeholder,
  value,
  error,
  handleInput,
  handleError,
}: ITextInput) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type='text'
        placeholder={placeholder}
        required
        minLength={3}
        value={value}
        onChange={handleInput}
        onBlur={handleError}
      />
      {error.username && <p className='error-message'>{error.username}</p>}
    </>
  );
};

export default TextInput;
