import { useTranslations } from "next-intl";
import { ProjectCard } from "@/components/ui";
import { getProjects } from "@/lib/constants";

export function WorkSection() {
  const t = useTranslations();
  const projects = getProjects(t);

  return (
    <section className="wrapper mx-auto flex flex-col items-center" id="work">
      <h2 className="title text-4xl mb-4">{t("Work.title")}</h2>
      <p className="mb-12 text-xl text-center">
        {t("Work.subtitle")}
      </p>
      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

