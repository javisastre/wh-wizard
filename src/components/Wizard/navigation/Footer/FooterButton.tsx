import React from "react";
import { IFooterButton } from "../../utils/interfaces";

const FooterButton = ({
  label,
  addClass,
  isDisabled,
  handleClick,
}: IFooterButton) => (
  <button
    className={`btn ${addClass}`}
    disabled={isDisabled}
    onClick={handleClick}
  >
    {label}
  </button>
);

export default FooterButton;
