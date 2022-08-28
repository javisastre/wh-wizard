import React from "react";
import { IHeaderTriangle } from "../../utils/interfaces";

const HeaderTriangle = ({ isStep1, isStep2 }: IHeaderTriangle) => {
  return (
    <div className='triangle-wrap'>
      <div
        className={`triangle ${
          isStep1
            ? "triangle-left"
            : isStep2
            ? "triangle-center"
            : "triangle-right"
        }`}
      ></div>
    </div>
  );
};

export default HeaderTriangle;
