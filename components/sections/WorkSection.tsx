import { useTranslations } from 'next-intl';
import { getProjects } from '@/lib/constants';
import { GlitchCard } from "@/components/ui/GlitchCard";
import Link from 'next/link';

export function WorkSection() {
  const t = useTranslations();
  const projects = getProjects(t);

  return (
    <section id="work">
      <div className="container">
        <div className="section-label">MY WORK</div>
        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-thumb">
                <div className="project-thumb-text">{project.title}</div>
              </div>
              <div className="project-body">
                <div className="project-name">{project.title}</div>
                <p className="project-desc">{project.description}</p>
              </div>
            </Link>
          ))}
          <GlitchCard
              title="AKQ4#8W_G"
              description="B1E! 3%2F-* 246[Q-40G 7A# 900= X-RG =17KJF[A^"
              badge="SOON"
            />
          <GlitchCard
            title="AKQ4#8W_G"
            description="B1E! 3%2F-* 246[Q-40G 7A# 900= X-RG =17KJF[A^"
            badge="SOON"
          />
        </div>
      </div>
    </section>
  );
}
