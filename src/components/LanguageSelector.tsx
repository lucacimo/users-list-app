import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const availableLanguages = (i18n.options.supportedLngs || []).filter(
    (lang) => lang !== "cimode",
  );

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 w-64">
      <div className="flex space-x-2">
        {availableLanguages.map((lang: string) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`text-blue-500 underline cursor-pointer ${i18n.language === lang ? "font-bold" : ""}`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
