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
    <div className="experience-timeline">
      <div className="timeline-track">
        <div className="timeline-line"></div>
        <div className="timeline-items">
          {recentExperience.map((exp) => (
            <div
              key={exp.id}
              className={`timeline-item${hoveredId === exp.id ? ' timeline-item--active' : ''}`}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                {COMPANY_LOGOS[exp.id] && (
                  <a href={COMPANY_LOGOS[exp.id]} target="_blank" rel="noopener noreferrer">
                    <Image src={COMPANY_LOGOS[exp.id]} alt={exp.company} width={24} height={24} />
                  </a>
                )}
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-period">{exp.period.split(' - ')[0]}</div>
                {hoveredId === exp.id && TIMELINE_PREVIEWS[exp.id] && (
                  <div className="timeline-tooltip">
                    <span className="timeline-tooltip-stack">{TIMELINE_PREVIEWS[exp.id].stack}</span>
                    <span className="timeline-tooltip-achievement">↗ {TIMELINE_PREVIEWS[exp.id].achievement}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          <Link href="/experience" className="timeline-item timeline-link">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-company">ALL →</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
