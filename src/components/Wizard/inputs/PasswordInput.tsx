import React, { useState } from "react";
import { IInput } from "../utils/interfaces";

const PasswordInput = ({
  name,
  label,
  placeholder,
  value,
  error,
  required,
  min,
  max,
  handleInput,
  handleError,
}: IInput) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className='password-input'>
      <label htmlFor={name}>{label}</label>
      <div className='password-relative'>
        <input
          id={name}
          name={name}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          required={required}
          minLength={min}
          maxLength={max}
          value={value}
          onChange={handleInput}
          onBlur={handleError}
        />
        <div className='password-inside-icon' onClick={() => setShow(!show)}>
          {show ? (
            <i className='fa-solid fa-eye-slash'></i>
          ) : (
            <i className='fa-solid fa-eye'></i>
          )}
        </div>
      </div>
      {error && <p className='error-message'>{error}</p>}
    </div>
  );
};

export default PasswordInput;
