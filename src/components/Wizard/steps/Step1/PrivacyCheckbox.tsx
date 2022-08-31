import React from "react";
import { IPrivacyCheckbox } from "../../utils/interfaces";

const PrivacyCheckbox = ({
  handleData,
  confirmPrivacy,
  label,
  name,
}: IPrivacyCheckbox) => {
  return (
    <div className='input-container'>
      <label htmlFor={name}>
        <input
          id={name}
          name={name}
          type='checkbox'
          checked={confirmPrivacy}
          onChange={handleData}
        />
        <div className='checkmark'>
          <div className='inner'></div>
        </div>
        <p>{label}</p>
      </label>
    </div>
  );
};

export default PrivacyCheckbox;
