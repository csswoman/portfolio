import Image from "next/image";
import {
  ExperienceCard,
  EducationCard,
  SkillsList,
  ToolsList,
  LanguagesList,
} from "@/components/ui";
import { personalInfo, workExperience, education } from "@/lib/constants";

export function AboutSection() {
  return (
    <section className="wrapper mx-auto flex flex-col items-center" id="about">
      <h2 className="title text-4xl mb-4">Acerca de mi</h2>
      
      {/* About Me */}
      <p className="mb-12 text-xl text-center">
        La compañera de trabajo más creativa 💻
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
          <p>
            Soy UX Engineer, me apasiona el diseño y el desarrollo de
            interfaces, cuento con 2 años de experiencia profesional.
          </p>
          <p>
            Mi objetivo es crear soluciones que mejoren la experiencia del
            usuario tanto en su atractivo, funcionalidad, simplicidad y
            facilidad de uso.
          </p>
          <p>
            Me gusta estar en constante aprendizaje, compartir conocimientos y
            jugar videojuegos en mi tiempo libre.
          </p>
          <p>Soy originaria de Venezuela y vivo hace casi 5 años en Perú ☀️</p>
        </div>
      </div>

      {/* Experience & Education Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Experience */}
        <article>
          <h3 className="title text-3xl mb-4">Experiencia</h3>
          <ul className="text-[15px] grid gap-6">
            {workExperience.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </ul>
          <div className="pl-16 pt-8 relative d-cv">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-sm py-2 px-3 text-purple-400 border rounded-lg border-purple-400 hover:bg-purple-400 hover:text-white transition-all"
            >
              Descarga mi CV
            </a>
          </div>
        </article>

        {/* Education, Skills, Tools, Languages */}
        <div className="flex flex-col gap-8">
          <article>
            <h3 className="title text-3xl mb-4">Educación</h3>
            <ul className="grid gap-4">
              {education.map((edu) => (
                <EducationCard key={edu.id} education={edu} />
              ))}
            </ul>
          </article>
          
          <article>
            <h3 className="title text-3xl mb-4">Habilidades</h3>
            <SkillsList />
          </article>
          
          <article>
            <h3 className="title text-3xl mb-4">Herramientas</h3>
            <ToolsList />
          </article>
          
          <article>
            <h3 className="title text-3xl mb-4">Idiomas</h3>
            <LanguagesList />
          </article>
        </div>
      </div>
    </section>
  );
}

