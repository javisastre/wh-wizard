import axios from "axios";
import { Dispatch, SetStateAction } from "react";

import { successObj, errorObj } from "../../utils/constants";
import { IWizardData } from "../../utils/interfaces";

export const createAccount = async (
  setData: Dispatch<SetStateAction<IWizardData>>
) => {
  // REAL BACKEND
  // const { username, password, hint } = wizardData.step2;
  // const userInfo = { username, password, hint };
  try {
    // const { data } = await axios.post("/backend-url", userInfo);
    // if (data.status === 200) ((prev) => ({ ...prev, step3: successObj }));
    // else ((prev) => ({ ...prev, step3: errorObj }));

    // FAKE BACKEND
    const { data } = await axios.get(
      "http://www.randomnumberapi.com/api/v1.0/random"
    );
    if (Number(data[0]) > 10)
      setData((prev) => ({ ...prev, step3: successObj }));
    else setData((prev) => ({ ...prev, step3: errorObj }));
  } catch (error) {
    setData((prev) => ({ ...prev, step3: errorObj }));
  } finally {
    console.log("user created!");
  }
};
