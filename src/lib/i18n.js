import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/locales/en/translation.json";
import hi from "@/locales/hi/translation.json";

function loadResources() {
  i18n.addResourceBundle("en", "translation", en, true, true);
  i18n.addResourceBundle("hi", "translation", hi, true, true);
}

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        hi: { translation: hi },
      },
      fallbackLng: "en",
      supportedLngs: ["en", "hi"],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "i18nextLng",
      },
      react: { useSuspense: false },
    });
} else {
  loadResources();
}

function syncHtmlLang(lng) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
}
i18n.on("languageChanged", syncHtmlLang);
if (typeof document !== "undefined" && i18n.resolvedLanguage) {
  syncHtmlLang(i18n.resolvedLanguage);
}

if (typeof module !== "undefined" && module.hot) {
  module.hot.accept(
    ["@/locales/en/translation.json", "@/locales/hi/translation.json"],
    () => {
      loadResources();
      if (i18n.emit) i18n.emit("loaded");
    }
  );
}

export default i18n;
