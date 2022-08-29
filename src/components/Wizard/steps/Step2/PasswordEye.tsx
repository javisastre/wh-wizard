import React from "react";
import { IPasswordEye } from "../../utils/interfaces";

const PasswordEye = ({ show, setShow }: IPasswordEye) => {
  return (
    <div className='password-inside-icon' onClick={() => setShow(!show)}>
      {show ? (
        <i className='fa-solid fa-eye-slash'></i>
      ) : (
        <i className='fa-solid fa-eye'></i>
      )}
    </div>
  );
};

export default PasswordEye;
