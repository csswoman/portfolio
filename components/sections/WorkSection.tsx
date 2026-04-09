import { useTranslations } from 'next-intl';
import { getProjects } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

export function WorkSection() {
  const t = useTranslations();
  const projects = getProjects(t);

  return (
    <section className="section reveal container" id="work">
      <div className="section-label">
        <span className="star">★</span> {t('Work.title')}
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div
              className="project-thumb"
              style={{
                background: `linear-gradient(135deg, #2B0F2E, #461a4e)`,
              }}
            >
              <div className="project-thumb-text">{project.title}</div>
            </div>
            <div className="project-body">
              <div className="project-name">{project.title}</div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags?.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
