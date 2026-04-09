import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { getWorkExperience, cvPaths } from '@/lib/constants';
import { trackCVDownload } from '@/lib/analytics';

export function AboutSection() {
  const t = useTranslations();
  const router = useRouter();
  const workExperience = getWorkExperience(t);

  const currentLocale = (router.locale || 'es') as keyof typeof cvPaths;
  const cvPath = cvPaths[currentLocale];

  const handleCVDownload = () => {
    trackCVDownload(currentLocale);
  };

  // Compute stats
  const stats = [
    { num: `${workExperience.length}+`, label: t('About.yearsExperience') || 'Years of Experience' },
    { num: '15+', label: t('About.projectsCompleted') || 'Projects Completed' },
    { num: '100%', label: t('About.clientSatisfaction') || 'Client Satisfaction' },
  ];

  return (
    <>
      {/* Stats Strip */}
      <section className="section reveal container">
        <div className="stats-strip">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="section reveal container" id="about">
        <div className="section-label">
          <span className="star">★</span> {t('About.experience')}
        </div>
        <div className="exp-list">
          {workExperience.map((exp) => (
            <div key={exp.id} className="exp-item">
              <div className="exp-date">{exp.period}</div>
              <div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-role">{exp.title}</div>
              </div>
              <span className="exp-tag">{exp.company}</span>
            </div>
          ))}
        </div>
        <div className="pt-8">
          <a
            href={cvPath}
            download
            target="_blank"
            rel="noreferrer"
            onClick={handleCVDownload}
            className="btn btn-primary"
          >
            {t('About.downloadCV')}
          </a>
        </div>
      </section>
    </>
  );
}
