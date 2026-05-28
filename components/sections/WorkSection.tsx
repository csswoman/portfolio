'use client';

import { useTranslations } from 'next-intl';
import { getProjects } from '@/lib/constants';
import { GlitchCard } from '@/components/ui/GlitchCard';
import Link from 'next/link';

export function WorkSection() {
  const t = useTranslations();
  const projects = getProjects(t);

  return (
    <section id="work" className="mb-8" aria-label="My work">
      <div className="max-w-3xl mx-auto">
        <h2 className="tracking-[2px] uppercase text-[var(--text-dim)] mb-4 font-medium text-[14px]">
          MY WORK
        </h2>
        <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="holo-card block rounded-md border border-[var(--border-light)] overflow-visible transition-all duration-300 hover:translate-y-[-2px] bg-[var(--bg-card)] no-underline relative"
              aria-label={project.title}
            >
              <div className="h-28 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#111] to-[#1a1a1a] border-b border-[var(--border-light)] rounded-t-md">
                <div className="text-[12px] text-[var(--text-muted)] tracking-[0.5px] uppercase text-center">
                  {project.title}
                </div>
              </div>
              <div
                className="rounded-b-md bg-[var(--bg-card)]"
                style={{ padding: '8px' }}
              >
                <div className="text-[14px] font-semibold text-[var(--text-primary)] mb-2">
                  {project.title}
                </div>
                <p className="text-[12px] text-[var(--text-muted)] leading-[1.6]">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <GlitchCard
            title="Coming soon"
            description="Coming soon"
            badge="SOON"
            aria-label="Coming soon project"
          />
          <GlitchCard
            title="Coming soon"
            description="Coming soon"
            badge="SOON"
            aria-label="Coming soon project"
          />
        </div>
      </div>
    </section>
  );
}
