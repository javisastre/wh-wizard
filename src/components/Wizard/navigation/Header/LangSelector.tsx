import React from "react";
import { useTranslation } from "react-i18next";
import { ILanguages } from "../../utils/interfaces";

const LangSelector = () => {
  const { i18n } = useTranslation();

  const languages: ILanguages = { es: "Español", ca: "Català" };

  return (
    <select
      className='lang-selector'
      defaultValue={i18n.resolvedLanguage}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      {Object.keys(languages).map((lang) => (
        <option key={lang} value={lang}>
          {languages[lang as keyof ILanguages]}
        </option>
      ))}
    </select>
  );
};

export default LangSelector;
