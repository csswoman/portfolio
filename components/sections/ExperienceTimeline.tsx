'use client';

import { getWorkExperience } from '@/lib/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const COMPANY_LOGOS: Record<number, string> = {
  1: '/images/cultivate_logo.jpg',
  2: '/images/upwork_logo.jpg',
  3: '/images/nomades_logo.jpg',
  4: '/images/upwork_logo.jpg',
  5: '/images/edteamlat_logo.jpg',
};

export function ExperienceTimeline() {
  const t = useTranslations();
  const workExperience = getWorkExperience(t);

  const recentExperience = workExperience.slice(0, 4);
  const latestId = recentExperience[0]?.id;

  return (
    <div className="relative">
      <p id="experience-timeline-hint" className="sr-only">
        {t('ExperiencePage.timelineScrollHint')}
      </p>
      <div
        className="overflow-x-auto md:overflow-visible no-scrollbar pr-2 md:pr-10"
        tabIndex={0}
        role="region"
        aria-label={t('ExperiencePage.experienceTimeline')}
        aria-describedby="experience-timeline-hint"
      >
        <div className="relative py-5 min-w-[600px]">
          <div className="timeline-line absolute top-[26px] left-0 right-0 h-px -translate-y-px" />
          <div className="relative flex flex-row gap-6 snap-x snap-mandatory">
            {recentExperience.map((exp) => {
              const isLatest = exp.id === latestId;

              return (
                <div
                  key={exp.id}
                  className="relative z-[1] w-[70%] max-w-[140px] flex-none snap-start text-left no-underline"
                >
                  <div
                    className={`mb-3 h-[10px] w-[10px] rounded-full border-2 border-[var(--border-medium)] bg-[var(--bg-card)] transition-all duration-300 ${
                      isLatest ? 'timeline-dot-active' : ''
                    }`}
                  />

                  <div className="relative pl-0">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-2 flex items-center gap-2 underline transition-opacity hover:opacity-80"
                    >
                      {COMPANY_LOGOS[exp.id] && (
                        <Image
                          src={COMPANY_LOGOS[exp.id]}
                          alt={`${exp.company} logo`}
                          width={24}
                          height={24}
                          className="shrink-0 flex-none rounded-sm object-cover"
                        />
                      )}

                      <div
                        className={`font-semibold tracking-[0.5px] whitespace-nowrap ${
                          isLatest ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'
                        }`}
                      >
                        {exp.company}
                      </div>
                    </a>

                    <div className="text-sm uppercase tracking-[0.5px] text-[var(--text-muted)]">
                      {exp.period.split(' - ')[0]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="timeline-fade-edge pointer-events-none absolute right-0 top-0 z-20 h-full w-24 md:hidden"
        aria-hidden="true"
      />
      <Link
        href="/experience"
        className="absolute top-0 right-2 z-30 inline-flex min-h-11 items-center text-sm font-semibold tracking-[0.5px] whitespace-nowrap text-[var(--accent)] hover:text-[var(--orange)] md:right-4"
        aria-label={t('ExperiencePage.viewAllExperience')}
      >
        {t('ExperiencePage.all')} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
