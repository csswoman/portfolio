import { getWorkExperience } from '@/lib/constants';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function ExperienceTimeline() {
  const t = useTranslations();
  const workExperience = getWorkExperience(t);
  
  const recentExperience = workExperience.slice(0, 4);

  return (
    <div className="experience-timeline">
      <div className="timeline-track">
        <div className="timeline-line"></div>
        <div className="timeline-items">
          {recentExperience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-period">{exp.period.split(' - ')[0]}</div>
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
