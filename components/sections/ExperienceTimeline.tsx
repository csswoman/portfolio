import { getWorkExperience } from '@/lib/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const COMPANY_LOGOS: Record<number, string> = {
  1: '/images/cultivate_logo.jpg',
  2: '/images/upwork_logo.jpg',
  3: '/images/denomades_logo.jpg',
  4: '/images/upwork_logo.jpg',
  5: '/images/edteamlat_logo.jpg',
};

const TIMELINE_PREVIEWS: Record<
  number,
  { stack: string; achievement: string }
> = {
  1: {
    stack: 'React · TypeScript · Laravel',
    achievement: 'Micro-frontend architecture',
  },
  2: { stack: 'WordPress · HubSpot', achievement: 'Mentored early-stage devs' },
  3: { stack: 'HTML · CSS · Figma', achievement: '100 Lighthouse score' },
  4: { stack: 'React · HTML · CSS', achievement: 'International clients' },
  5: { stack: 'HTML · CSS', achievement: 'Component system' },
};

export function ExperienceTimeline() {
  const t = useTranslations();
  const workExperience = getWorkExperience(t);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const recentExperience = workExperience.slice(0, 4);

return (
  <div className="relative">
    <div className="overflow-x-auto scrollbar-none pr-10">
      <div className="relative py-5 min-w-max">
        <div className="absolute top-[26px] left-0 right-0 h-px bg-gradient-to-r from-[var(--accent)] to-transparent -translate-y-px"></div>
        <div className="relative flex gap-6 snap-x snap-mandatory">
          {recentExperience.map((exp) => (
            <div
              key={exp.id}
              className={`relative flex-none w-[70%] max-w-[160px] text-left z-[1] no-underline snap-start ${
                hoveredId === exp.id ? 'timeline-item--active' : ''
              }`}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`w-[10px] h-[10px] rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-medium)] mb-3 transition-all duration-300 ${
                  hoveredId === exp.id
                    ? 'border-[var(--accent)] bg-[var(--accent-dim)]'
                    : ''
                } ${
                  exp.id === recentExperience[0].id
                    ? 'bg-[var(--accent)] border-[var(--accent)] shadow-[0_0_10px_rgba(183,142,219,0.3)]'
                    : ''
                }`}
              />

              <div className="pl-0 relative">
                <div className="flex items-center gap-2 mb-2">
                  {COMPANY_LOGOS[exp.id] && (
                    <a
                      href={COMPANY_LOGOS[exp.id]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={COMPANY_LOGOS[exp.id]}
                        alt={exp.company}
                        width={24}
                        height={24}
                        className="rounded-sm object-cover flex-none shrink-0"
                      />
                    </a>
                  )}

                  <div
                    className={`font-semibold text-[var(--text-primary)] tracking-[0.5px] whitespace-nowrap ${
                      exp.id === recentExperience[0].id
                        ? 'text-[var(--accent)]'
                        : ''
                    }`}
                  >
                    {exp.company}
                  </div>
                </div>

                <div className="text-sm text-[var(--text-muted)] tracking-[0.5px] uppercase">
                  {exp.period.split(' - ')[0]}
                </div>

                {hoveredId === exp.id && TIMELINE_PREVIEWS[exp.id] && (
                  <div className="absolute top-[calc(100%+10px)] left-0 bg-[var(--bg-card)] border border-[var(--accent-border)] rounded-md p-2 flex flex-col gap-1 whitespace-nowrap z-[10] animate-[fadeInUp_0.15s_ease] shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                    <span className="text-[10px] text-[var(--text-muted)] tracking-[0.3px]">
                      {TIMELINE_PREVIEWS[exp.id].stack}
                    </span>
                    <span className="text-[11px] text-[var(--accent)] font-medium tracking-[0.2px]">
                      ↗ {TIMELINE_PREVIEWS[exp.id].achievement}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-r from-transparent to-[#0a0a0a] to-80% z-20" />
    <Link
      href="/experience"
      className="absolute right-4 top-[16px] z-30 text-sm text-[var(--accent)] font-semibold tracking-[0.5px] whitespace-nowrap hover:text-[var(--orange)]"
    >
      ALL →
    </Link>
  </div>
);
}
