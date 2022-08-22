import { IStep1, IStep2, IWizardData } from "./interfaces";

export const STEP1 = "step1";
export const STEP2 = "step2";
export const STEP3 = "step3";

export const initialStep1: IStep1 = {
  confirmPrivacy: false,
};

export const initialStep2: IStep2 = {
  username: "",
  password: "",
  repeatPassword: "",
  hint: "",
};

export const initialWizardData: IWizardData = {
  step1: initialStep1,
  step2: initialStep2,
};
