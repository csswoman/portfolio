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

return (
  <div className="relative">
    <div className="overflow-x-auto no-scrollbar pr-10">
      <div className="relative py-5 min-w-[600px]">
        <div className="absolute top-[26px] left-0 right-0 h-px bg-gradient-to-r from-[var(--accent)] to-transparent -translate-y-px"></div>
        <div className="relative flex gap-6 snap-x snap-mandatory">
          {recentExperience.map((exp) => (
            <div
              key={exp.id}
              className="relative flex-none w-[70%] max-w-[140px] text-left z-[1] no-underline snap-start"
            >
              <div
                className={`w-[10px] h-[10px] rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-medium)] mb-3 transition-all duration-300 ${
                  exp.id === recentExperience[0].id
                    ? 'bg-[var(--accent)] border-[var(--accent)] shadow-[0_0_10px_rgba(183,142,219,0.3)]'
                    : ''
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
                      alt={exp.company}
                      width={24}
                      height={24}
                      className="rounded-sm object-cover flex-none shrink-0"
                    />
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
                </a>

                <div className="text-sm text-[var(--text-muted)] tracking-[0.5px] uppercase">
                  {exp.period.split(' - ')[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20" style={{
      background: 'linear-gradient(to right, transparent, var(--bg-deep) 80%)'
    }} />
    <Link
      href="/experience"
      className="absolute right-4 top-[16px] z-30 text-sm text-[var(--accent)] font-semibold tracking-[0.5px] whitespace-nowrap hover:text-[var(--orange)]"
    >
      ALL →
    </Link>
  </div>
);
}
