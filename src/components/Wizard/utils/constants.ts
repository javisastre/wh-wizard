import {
  IErrorMessages,
  IFinished,
  IStep1,
  IStep2,
  IValidators,
  IWizardData,
} from "./interfaces";

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

export const initialFinished: IFinished = {
  success: false,
  error: false,
};

export const initialErrorMessages: IErrorMessages = {
  username: "",
  password: "",
  repeatPassword: "",
};

export const initialWizardData: IWizardData = {
  step1: initialStep1,
  step2: initialStep2,
  step3: initialFinished,
};

export const validators: IValidators = {
  username: /[0-9a-zA-Z]{3,}/,
  password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,24}$/,
  repeatPassword: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,24}$/,
};

export const errorMessages: IErrorMessages = {
  username: "Debes introducir un usuario válido",
  password: "Tu password no es suficientemente compleja",
  repeatPassword: "Debe ser igual que la anterior",
};
