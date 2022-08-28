import React from "react";
import { IHeaderBars } from "../../utils/interfaces";

const HeaderBars = ({ isStep1, step2Done, isStep3 }: IHeaderBars) => {
  return (
    <div className='hr-bars'>
      <hr className={`${!isStep1 || step2Done ? "hr-green" : "hr-grey"}`} />
      <hr className={`${!isStep3 ? "hr-grey" : "hr-green"}`} />
    </div>
  );
};

export default HeaderBars;
