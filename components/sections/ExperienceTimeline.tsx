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

const TIMELINE_PREVIEWS: Record<number, { stack: string; achievement: string }> = {
  1: { stack: 'React · TypeScript · Laravel', achievement: 'Micro-frontend architecture' },
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
    <div className="pt-4 overflow-x-auto scrollbar-none">
      <div className="relative py-5">
        <div className="absolute top-[26px] left-0 right-0 h-px bg-gradient-to-r from-[var(--accent)] to-transparent -translate-y-px"></div>
        <div className="relative flex justify-between items-start gap-4">
          {recentExperience.map((exp) => (
            <div
              key={exp.id}
              className={`relative flex-1 text-left z-[1] no-underline ${hoveredId === exp.id ? 'timeline-item--active' : ''}`}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`w-[10px] h-[10px] rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-medium)] mb-3 transition-all duration-300 ${
                hoveredId === exp.id ? 'border-[var(--accent)] bg-[var(--accent-dim)]' : ''
              } ${exp.id === recentExperience[0].id ? 'bg-[var(--accent)] border-[var(--accent)] shadow-[0_0_10px_rgba(183,142,219,0.3)]' : ''}`}></div>
              <div className="pl-0 relative">
                {COMPANY_LOGOS[exp.id] && (
                  <a href={COMPANY_LOGOS[exp.id]} target="_blank" rel="noopener noreferrer">
                    <Image src={COMPANY_LOGOS[exp.id]} alt={exp.company} width={24} height={24} />
                  </a>
                )}
                <div className={`text-[13px] font-semibold text-[var(--text-primary)] tracking-[0.5px] mb-1 whitespace-nowrap ${
                  exp.id === recentExperience[0].id ? 'text-[var(--accent)]' : ''
                }`}>{exp.company}</div>
                <div className="text-[11px] text-[var(--text-muted)] tracking-[0.5px] uppercase">{exp.period.split(' - ')[0]}</div>
                {hoveredId === exp.id && TIMELINE_PREVIEWS[exp.id] && (
                  <div className="absolute top-[calc(100%+10px)] left-0 bg-[var(--bg-card)] border border-[var(--accent-border)] rounded-md p-2 flex flex-col gap-1 whitespace-nowrap z-[10] animate-[fadeInUp_0.15s_ease] shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                    <span className="text-[10px] text-[var(--text-muted)] tracking-[0.3px]">{TIMELINE_PREVIEWS[exp.id].stack}</span>
                    <span className="text-[11px] text-[var(--accent)] font-medium tracking-[0.2px]">↗ {TIMELINE_PREVIEWS[exp.id].achievement}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          <Link href="/experience" className="relative flex-1 text-left z-[1] no-underline last:flex-none">
            <div className="w-[10px] h-[10px] rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-medium)] mb-3 transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent-dim)]"></div>
            <div className="pl-0 relative">
              <div className="text-[12px] text-[var(--accent)] font-semibold tracking-[0.5px] mb-1 whitespace-nowrap hover:text-[var(--orange)]">ALL →</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
