import { useTranslations } from "next-intl";
import { getLanguages } from "@/lib/constants";

export function LanguagesList() {
  const t = useTranslations();
  const languages = getLanguages(t);

  return (
    <div className="text-[15px]">
      {languages.map((language) => (
        <p key={language.name}>
          {language.name} ({language.level})
        </p>
      ))}
    </div>
  );
}

