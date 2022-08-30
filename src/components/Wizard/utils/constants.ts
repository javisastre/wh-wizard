import {
  IErrorMessages,
  IErrorMessagesDB,
  IStep3,
  IStep1,
  IStep2,
  IValidators,
  IWizardData,
} from "./interfaces";

import i18n from "../../../i18n/i18n";
const { t } = i18n;

// NAVIGATION
export const STEP1 = "step1";
export const STEP2 = "step2";
export const STEP3 = "step3";

// CONTEXT
export const initialStep1: IStep1 = {
  confirmPrivacy: false,
};
export const initialStep2: IStep2 = {
  username: "",
  password: "",
  repeatPassword: "",
  hint: "",
};
export const initialStep3: IStep3 = {
  success: false,
  error: false,
};
export const initialWizardData: IWizardData = {
  step1: initialStep1,
  step2: initialStep2,
  step3: initialStep3,
};

// STEP2
export const validators: IValidators = {
  username: /[0-9a-zA-Z]{3,}/,
  password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,24}$/,
  repeatPassword: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,24}$/,
};
export const initialErrorMessages: IErrorMessages = {
  username: "",
  password: "",
  repeatPassword: "",
};
export const errorMessagesDB: IErrorMessagesDB = {
  username: {
    empty: t("STEP2_ERR_EMPTY_FIELD"),
    invalid: t("STEP2_ERR_INVALID_USERNAME"),
  },
  password: {
    empty: t("STEP2_ERR_EMPTY_FIELD"),
    invalid: t("STEP2_ERR_INVALID_PASS"),
  },
  repeatPassword: {
    empty: t("STEP2_ERR_EMPTY_FIELD"),
    invalid: t("STEP2_ERR_INVALID_REPASS"),
  },
};

// STEP3

export const successObj: IStep3 = {
  success: true,
  error: false,
};

export const errorObj: IStep3 = {
  success: false,
  error: true,
};
