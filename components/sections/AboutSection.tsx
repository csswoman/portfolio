import { useTranslations, useLocale } from 'next-intl';
import { getWorkExperience, cvPaths } from '@/lib/constants';
import { trackCVDownload } from '@/lib/analytics';

export function AboutSection() {
  const t = useTranslations();
  const locale = useLocale();
  const workExperience = getWorkExperience(t);

  const currentLocale = (locale || 'es') as keyof typeof cvPaths;
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
      <section className="py-16 relative z-[1] max-w-3xl mx-auto px-5">
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
      <section className="py-16 relative z-[1] max-w-3xl mx-auto px-5" id="about">
        <div className="text-[10px] tracking-[2px] uppercase text-[var(--text-dim)] mb-10 font-medium">
          <span className="star">★</span> {t('About.experience')}
        </div>
        <div className="flex flex-col gap-0">
          {workExperience.map((exp) => (
            <div key={exp.id} className="py-8 border-b border-[var(--border-light)] first:pt-0">
              <div className="flex justify-between items-baseline gap-4 flex-wrap mb-4">
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-[14px] font-semibold text-[var(--text-primary)] tracking-[0.3px]">{exp.title}</span>
                  <span className="text-[13px] font-normal text-[var(--text-secondary)] tracking-[0.2px]">— {exp.company}</span>
                </div>
                <span className="text-[11px] text-[var(--text-dim)] tracking-[0.8px] uppercase whitespace-nowrap flex-shrink-0">{exp.period}</span>
              </div>
              <ul className="list-none flex flex-col gap-2">
                {exp.description.split('\n').map((line: string, i: number) => {
                  const bullet = line.replace(/^\d+\.\s*/, '').trim();
                  return bullet ? (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                      <span className="text-[var(--accent)] flex-shrink-0 text-[12px] mt-px opacity-70">→</span>
                      <span>{bullet}</span>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-10">
          <a
            href={cvPath}
            download
            target="_blank"
            rel="noreferrer"
            onClick={handleCVDownload}
            className="inline-flex items-center gap-1.5 py-2.5 px-4.5 border border-[var(--accent)] text-[var(--accent)] bg-transparent text-[12px] font-medium uppercase tracking-[0.5px] transition-all duration-200 hover:bg-[var(--accent-dim)] hover:shadow-[0_0_12px_rgba(183,142,219,0.25)] hover:scale-[1.02] rounded-md"
          >
            {t('About.downloadCV')}
          </a>
        </div>
      </section>
    </>
  );
}
