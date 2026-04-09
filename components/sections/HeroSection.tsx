import { useTranslations } from 'next-intl';
import { personalInfo } from '@/lib/constants';

export function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <>
      <div className="stars-bg" aria-hidden="true">
        <div className="p"></div>
        <div className="p"></div>
        <div className="p"></div>
        <div className="p"></div>
        <div className="p"></div>
        <div className="p"></div>
        <div className="p"></div>
        <div className="p"></div>
        <div className="p"></div>
        <div className="p"></div>
      </div>

      <section className="hero container">
        <h1 className="hero-name">{personalInfo.name}</h1>
        <p className="hero-handle">@{personalInfo.username}</p>
        <p className="hero-title">{personalInfo.title}</p>
        <p className="hero-desc">
          {t.rich('description', {
            role: (chunks) => <em>{chunks}</em>,
          })}
        </p>
        <div className="hero-actions">
          <span className="status-pill">
            <span className="dot"></span>
            {t('status')}
          </span>
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
            {t('getInTouch')}
          </a>
          <a href="#work" className="btn">
            {t('viewWork')}
          </a>
        </div>
      </section>
    </>
  );
}
