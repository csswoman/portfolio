'use client';

import { useTranslations } from 'next-intl';
import { getProjects } from '@/lib/constants';
import { GlitchCard } from '@/components/ui/GlitchCard';
import Link from 'next/link';
import { trackProjectClick } from '@/lib/analytics';
import type { Project } from '@/types';

function FeaturedProjectCard({
  project,
  onTrack,
}: {
  project: Project;
  onTrack: () => void;
}) {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="holo-card block rounded-md border border-[var(--border-light)] overflow-visible transition-all duration-300 hover:translate-y-[-2px] motion-reduce:hover:translate-y-0 bg-[var(--bg-card)] no-underline relative"
      aria-label={project.title}
      onClick={onTrack}
    >
      <div className="h-32 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-elevated)] border-b border-[var(--border-light)] rounded-t-md px-4">
        <div className="text-[14px] text-[var(--accent)] tracking-[0.5px] uppercase text-center font-semibold">
          {project.title}
        </div>
      </div>
      <div className="rounded-b-md bg-[var(--bg-card)] p-3">
        <div className="text-[15px] font-semibold text-[var(--text-primary)] mb-2">
          {project.title}
        </div>
        <p className="text-[14px] text-[var(--text-secondary)] leading-[1.65]">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

function CompactProjectRow({
  project,
  onTrack,
}: {
  project: Project;
  onTrack: () => void;
}) {
  return (
    <li>
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start justify-between gap-3 rounded-md border border-[var(--border-light)] bg-[var(--bg-card)] p-3 no-underline transition-colors duration-300 hover:border-[var(--accent-border)] hover:bg-[var(--bg-elevated)]"
        aria-label={project.title}
        onClick={onTrack}
      >
        <div className="min-w-0">
          <div className="text-[13px] font-semibold text-[var(--text-primary)] tracking-[0.3px] uppercase truncate">
            {project.title}
          </div>
          <p className="mt-1 text-[13px] text-[var(--text-muted)] leading-[1.5] line-clamp-2">
            {project.description}
          </p>
        </div>
        <span
          className="shrink-0 text-[var(--accent)] text-[12px] tracking-[0.5px] uppercase opacity-70 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        >
          →
        </span>
      </Link>
    </li>
  );
}

export function WorkSection() {
  const t = useTranslations();
  const projects = getProjects(t);
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="mb-8" aria-label={t('Work.title')}>
      <div className="max-w-3xl mx-auto">
        <h2 className="tracking-[2px] uppercase text-[var(--text-dim)] mb-4 font-medium text-[14px]">
          {t('Work.title')}
        </h2>

        <div className="flex flex-col gap-3 mb-4">
          {featured && (
            <FeaturedProjectCard
              project={featured}
              onTrack={() => trackProjectClick(featured.title, featured.url)}
            />
          )}
          {rest.length > 0 && (
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {rest.map((project) => (
                <CompactProjectRow
                  key={project.id}
                  project={project}
                  onTrack={() => trackProjectClick(project.title, project.url)}
                />
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <GlitchCard
            title={t('Journal.post1Title')}
            description={t('Journal.post1Excerpt')}
            badge="SOON"
            aria-label={t('Journal.post1Title')}
          />
        </div>
      </div>
    </section>
  );
}
