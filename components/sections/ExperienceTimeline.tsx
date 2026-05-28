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
        <div className="relative py-5 min-w-[280px] md:min-w-[600px]">
          <div className="timeline-line hidden md:block absolute top-[26px] left-0 right-0 h-px -translate-y-px" />
          <div className="relative flex flex-col gap-4 md:flex-row md:gap-6 md:snap-x md:snap-mandatory">
            {recentExperience.map((exp) => {
              const isLatest = exp.id === latestId;

              return (
                <div
                  key={exp.id}
                  className="relative flex-none w-full md:w-[70%] md:max-w-[140px] text-left z-[1] no-underline md:snap-start"
                >
                  <div
                    className={`hidden md:block w-[10px] h-[10px] rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-medium)] mb-3 transition-all duration-300 ${
                      isLatest ? 'timeline-dot-active' : ''
                    }`}
                  />

                  <div className="pl-0 relative">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 mb-2 underline hover:opacity-80 transition-opacity"
                    >
                      {COMPANY_LOGOS[exp.id] && (
                        <Image
                          src={COMPANY_LOGOS[exp.id]}
                          alt={`${exp.company} logo`}
                          width={24}
                          height={24}
                          className="rounded-sm object-cover flex-none shrink-0"
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

                    <div className="text-sm text-[var(--text-muted)] tracking-[0.5px] uppercase">
                      {exp.period.split(' - ')[0]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="timeline-fade-edge pointer-events-none absolute right-0 top-0 h-full w-24 z-20" />
      <Link
        href="/experience"
        className="absolute right-2 md:right-4 top-[16px] z-30 text-sm text-[var(--accent)] font-semibold tracking-[0.5px] whitespace-nowrap hover:text-[var(--orange)] min-h-11 inline-flex items-center"
        aria-label={t('ExperiencePage.viewAllExperience')}
      >
        {t('ExperiencePage.all')} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
