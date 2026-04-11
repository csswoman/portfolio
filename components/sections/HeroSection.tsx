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
        <p className="hero-tagline">{t('tagline')}</p>

        <p className="hero-desc">
          {t('description')}
        </p>

        <div className="status-pill">
          <span className="dot"></span>
          {t('status')}
        </div>

        <div className="hero-actions">
          <a href={`mailto:${personalInfo.email}`} className="btn btn-cta-primary">
            {t('letsWork')}
          </a>
          <Link href="/experience" className="btn btn-cta-secondary">
            {t('viewExperience')}
          </Link>
          <button
            onClick={handleCopyEmail}
            className="btn btn-cta-ghost"
            aria-label="Copy email address"
          >
            {copied ? '✓ Copied' : t('copyEmail')}
          </button>
        </div>

        <ExperienceTimeline />
      </div>
    </section>
  );
}
