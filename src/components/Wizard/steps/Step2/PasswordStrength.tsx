import React from "react";

import { passMatchers } from "../../utils/constants";
import { IPasswordStrength } from "../../utils/interfaces";

const PasswordStrength = ({ password }: IPasswordStrength) => {
  const strength = (word: string) => {
    if (word.length === 0) return "";
    if (passMatchers.strong.test(word)) return "strong";
    if (passMatchers.good.test(word)) return "good";
    if (passMatchers.fair.test(word)) return "fair";
    if (passMatchers.weak.test(word)) return "weak";
  };

  return <div className={`password-strength ${strength(password)}`}></div>;
};

export default PasswordStrength;
