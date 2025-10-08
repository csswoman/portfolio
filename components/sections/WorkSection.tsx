import { ProjectCard } from "@/components/ui";
import { projects } from "@/lib/constants";

export function WorkSection() {
  return (
    <section className="wrapper mx-auto flex flex-col items-center" id="work">
      <h2 className="title text-4xl mb-4">Mi trabajo</h2>
      <p className="mb-12 text-xl text-center">
        Una selección de los mejores proyectos que he realizado
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

