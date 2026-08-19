import { useTranslation } from "react-i18next";

export function useDynamicTranslate() {
  const { i18n } = useTranslation();

  return (name, buckets = "categoryNames") => {
    if (!name) return "";
    const bundle = i18n.getResourceBundle(i18n.language, "translation");
    const list = Array.isArray(buckets) ? buckets : [buckets];
    for (const b of list) {
      const hit = bundle?.[b]?.[name];
      if (hit) return hit;
    }
    return name;
  };
}
