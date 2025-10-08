import Image from "next/image";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-xl bg-transparent hover:bg-white hover:bg-opacity-10 transition-all"
    >
      <article>
        <Image
          src={project.image}
          alt={project.title}
          width={640}
          height={313}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
          className="rounded-xl mb-4"
          priority={priority}
        />
        <p className="font-bold text-lg">{project.title}</p>
        <p>{project.description}</p>
      </article>
    </a>
  );
}

