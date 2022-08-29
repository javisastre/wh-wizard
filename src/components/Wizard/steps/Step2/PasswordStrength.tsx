import React from "react";
import { IPasswordStrength } from "../../utils/interfaces";

const PasswordStrength = ({ password }: IPasswordStrength) => {
  const matchers = {
    weak: /^(?=.*[a-zA-Z]).{1,24}$/,
    fair: /^(?=.*[a-z])(?=.*[A-Z]).{4,24}$/,
    good: /(?=.*[0-9])(?=.*[a-zA-Z]).{8,24}$/,
    strong: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/,
  };

  const strength = (word: string) => {
    if (word.length === 0) return "";
    if (matchers.strong.test(word)) return "strong";
    if (matchers.good.test(word)) return "good";
    if (matchers.fair.test(word)) return "fair";
    if (matchers.weak.test(word)) return "weak";
  };

  return <div className={`password-strength ${strength(password)}`}></div>;
};

export default PasswordStrength;
