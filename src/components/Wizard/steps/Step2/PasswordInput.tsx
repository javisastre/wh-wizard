import React, { useState } from "react";

import PasswordEye from "./PasswordEye";
import PasswordStrength from "./PasswordStrength";

import { IInput } from "../../utils/interfaces";

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
      <div className='password-container'>
        <input
          id={name}
          name={name}
          type={show ? "text" : "password"}
          className={error ? "input-error" : "input-normal"}
          placeholder={placeholder}
          required={required}
          minLength={min}
          maxLength={max}
          value={value}
          onChange={handleInput}
          onBlur={handleError}
        />
        <PasswordEye show={show} setShow={setShow} />
        <PasswordStrength password={value} />
      </div>
      <div className='error-message-container'>
        {error && <p className='error-message'>{error}</p>}
      </div>
    </div>
  );
};

export default PasswordInput;
