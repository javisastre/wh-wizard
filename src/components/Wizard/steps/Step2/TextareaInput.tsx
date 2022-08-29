import React, { useState } from "react";

import { IInput, TInputsEvent } from "../../utils/interfaces";

const TextareaInput = ({
  name,
  label,
  placeholder,
  value,
  required,
  min,
  max,
  handleInput,
}: IInput) => {
  const [count, setCount] = useState<number>(0);

  const handleChanges = (e: TInputsEvent) => {
    handleInput(e);
    setCount(e.target.value.length);
  };

  return (
    <div className='textarea-input'>
      <div>
        <label htmlFor={name}>{label}</label>{" "}
        <i className='fa-solid fa-circle-info info'></i>
      </div>
      <div className='textarea-counter'>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          minLength={min}
          maxLength={max}
          required={required}
          value={value}
          onChange={handleChanges}
        ></textarea>
        <div>
          {count}/{max}
        </div>
      </div>
    </div>
  );
};

export default TextareaInput;
