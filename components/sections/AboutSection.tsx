import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  ExperienceCard,
  EducationCard,
  SkillsList,
  ToolsList,
  LanguagesList,
} from "@/components/ui";
import { personalInfo, getWorkExperience, getEducation, cvPaths } from "@/lib/constants";
import { trackCVDownload } from "@/lib/analytics";

export function AboutSection() {
  const t = useTranslations();
  const router = useRouter();
  const workExperience = getWorkExperience(t);
  const education = getEducation(t);
  
  // Obtener el idioma actual para seleccionar el CV correcto
  const currentLocale = (router.locale || "es") as keyof typeof cvPaths;
  const cvPath = cvPaths[currentLocale];

  // Función para manejar la descarga del CV
  const handleCVDownload = () => {
    trackCVDownload(currentLocale);
  };

  return (
    <section className="wrapper mx-auto flex flex-col items-center" id="about">
      <h2 className="title text-4xl mb-4">{t("About.title")}</h2>
      
      {/* About Me */}
      <p className="mb-12 text-xl text-center">
        {t("About.subtitle")}
      </p>
      <div className="grid sm:grid-cols-2 gap-8 mb-12">
        <div>
          <Image
            src={personalInfo.aboutImage}
            alt="About me"
            width={300}
            height={300}
            sizes="(max-width: 640px) 100vw, 300px"
            className="about-img"
          />
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <p>{t("About.description1")}</p>
          <p>{t("About.description2")}</p>
          <p>{t("About.description3")}</p>
        </div>
      </div>

      {/* Experience & Education Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Experience */}
        <article>
          <h3 className="title text-3xl mb-4">{t("About.experience")}</h3>
          <ul className="text-[15px] grid gap-6">
            {workExperience.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </ul>
          <div className="pl-16 pt-8 relative d-cv">
            <a
              href={cvPath}
              download
              target="_blank"
              rel="noreferrer"
              onClick={handleCVDownload}
              className="font-semibold text-sm py-2 px-3 text-purple-400 border rounded-lg border-purple-400 hover:bg-purple-400 hover:text-white transition-all"
            >
              {t("About.downloadCV")}
            </a>
          </div>
        </article>

        {/* Education, Skills, Tools, Languages */}
        <div className="flex flex-col gap-8">
          <article>
            <h3 className="title text-3xl mb-4">{t("About.education")}</h3>
            <ul className="grid gap-4">
              {education.map((edu) => (
                <EducationCard key={edu.id} education={edu} />
              ))}
            </ul>
          </article>
          
          <article>
            <h3 className="title text-3xl mb-4">{t("About.skills")}</h3>
            <SkillsList />
          </article>
          
          <article>
            <h3 className="title text-3xl mb-4">{t("About.tools")}</h3>
            <ToolsList />
          </article>
          
          <article>
            <h3 className="title text-3xl mb-4">{t("About.languages")}</h3>
            <LanguagesList />
          </article>
        </div>
      </div>
    </section>
  );
}

