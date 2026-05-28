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
      <div className="flex h-32 items-center justify-center overflow-hidden rounded-t-md border-b border-[var(--border-light)] bg-[var(--bg-elevated)] px-4">
        <span className="text-label font-semibold text-[var(--accent)]" aria-hidden="true">
          {project.title}
        </span>
      </div>
      <div className="rounded-b-md bg-[var(--bg-card)] p-4">
        <p className="text-prose leading-[1.65]">
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
        className="group flex items-start justify-between gap-3 rounded-md border border-[var(--border-light)] bg-[var(--bg-card)] p-4 no-underline transition-colors duration-200 hover:border-[var(--accent-border)] hover:bg-[var(--bg-elevated)]"
        aria-label={project.title}
        onClick={onTrack}
      >
        <div className="min-w-0">
          <div className="text-label truncate font-semibold text-[var(--text-primary)]">
            {project.title}
          </div>
          <p className="mt-1 text-[0.875rem] leading-[1.5] text-[var(--text-muted)] line-clamp-2">
            {project.description}
          </p>
        </div>
        <span
          className="text-label shrink-0 text-[var(--accent)] opacity-70 transition-opacity group-hover:opacity-100"
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
      <div className="content-shell">
        <h2 className="section-headline">
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
