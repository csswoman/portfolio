import { languages } from "@/lib/constants";

export function LanguagesList() {
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

