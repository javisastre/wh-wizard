import { IErrorMessagesDB, IMessageContent } from "./interfaces";

import i18n from "../../../i18n/i18n";
const { t } = i18n;

// STEP2
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
export const successMessage: IMessageContent = {
  title: t("STEP3_SUCCESS_TITLE"),
  body: t("STEP3_SUCCESS_BODY"),
};
export const errorMessage: IMessageContent = {
  title: t("STEP3_ERROR_TITLE"),
  body: t("STEP3_ERROR_BODY"),
};
