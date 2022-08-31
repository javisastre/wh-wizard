import React from "react";
import { useTranslation } from "react-i18next";

const Step404 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>Error 404</h1>
      <p>{t("STEP404")}</p>
    </div>
  );
};

export default Step404;
