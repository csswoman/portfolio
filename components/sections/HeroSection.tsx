'use client';

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
    } catch {
      // No-op: clipboard can fail due to browser permissions.
    }
  };

  return (
    <section className="pt-6 md:pt-10" aria-labelledby="hero-role">
      <div className="content-shell">
        <header className="mb-6">
          <p className="hero-identity-line mb-3">
            <span className="uppercase">{personalInfo.name}</span>
            <span aria-hidden="true"> / </span>
            <span>{personalInfo.username}</span>
          </p>
          <h1 id="hero-role" className="hero-display uppercase">
            {t('role')}
          </h1>
        </header>

        <div className="mb-6 flex flex-col gap-5">
          <p className="text-prose text-[var(--text-muted)]">{t('tagline')}</p>
          <p className="text-prose">
            {t.rich('description', {
              strong: (chunks) => <strong className="hero-prose-strong">{chunks}</strong>,
            })}
          </p>
        </div>

        <div className="text-label mb-6 inline-flex items-center gap-2 font-medium text-[var(--accent)]">
          <span
            className="h-[6px] w-[6px] rounded-full bg-[var(--accent)] animate-[pulse_2s_ease-out_infinite]"
            aria-hidden="true"
          />
          {t('status')}
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-4">
          <a href={`mailto:${personalInfo.email}`} className="btn-primary min-h-11">
            {t('letsWork')}
          </a>
          <Link href="/experience" className="btn-primary min-h-11">
            {t('viewExperience')}
          </Link>
          <button
            onClick={handleCopyEmail}
            className="btn-secondary min-h-11"
            aria-label={t('copyEmailAria')}
            aria-live="polite"
            aria-atomic="true"
          >
            {copied ? `✓ ${t('emailCopied')}` : t('copyEmail')}
          </button>
        </div>

        <ExperienceTimeline />
      </div>
    </section>
  );
}
