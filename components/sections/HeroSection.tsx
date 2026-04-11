import { useTranslations } from 'next-intl';
import { personalInfo } from '@/lib/constants';
import Link from 'next/link';
import { useState } from 'react';
import { ExperienceTimeline } from './ExperienceTimeline';

export function HeroSection() {
  const t = useTranslations('Hero');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-name">
          {personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[1]}
          <span className="hero-handle">&nbsp;/{personalInfo.username}</span>
        </h1> 
        <p className="hero-title">{t('role')}</p>

        <p className="hero-desc">
          {t('description')}
        </p>
        <p className="hero-desc">
          {t.rich('description2', {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <div className="status-pill">
          <span className="dot"></span>
          {t('status')}
        </div>

        <div className="hero-actions">
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
            {t('getInTouch')}
          </a>
          <button
            onClick={handleCopyEmail}
            className="btn btn-primary"
            aria-label="Copy email address"
          >
            {copied ? '✓ COPIED' : 'COPY EMAIL'}
          </button>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Link href="/experience" className="hero-link">
            {t('viewWork')}
          </Link>
        </div>

        <ExperienceTimeline />
      </div>
    </section>
  );
}
