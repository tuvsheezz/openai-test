import { useTranslation } from "react-i18next";
import { languageType } from "../../types/i18nTypes";

export default function ChangeLanguageComponent() {
  const { i18n } = useTranslation();

  const onChangeLanguage = (language: languageType) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => onChangeLanguage("en")}>English</button>
      <button onClick={() => onChangeLanguage("ja")}>日本語</button>
    </div>
  );
}
