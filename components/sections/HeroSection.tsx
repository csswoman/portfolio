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
    <section className="pt-6 md:pt-10">
      <div className="content-shell">
        <h1 className="mb-2 flex items-center text-[clamp(2rem,5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] uppercase">
          {personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[1]}
          <span className="text-label text-[var(--text-muted)]">&nbsp;/{personalInfo.username}</span>
        </h1>
        <p className="section-headline mb-4 text-[var(--text-primary)]">{t('role')}</p>
        <p className="mb-6 text-[0.875rem] text-[var(--text-muted)]">{t('tagline')}</p>

        <p className="text-prose mb-2">
          {t('description')}
        </p>

        <div className="text-label mb-6 inline-flex items-center gap-2 font-medium text-[var(--accent)]">
          <span className="w-[6px] h-[6px] rounded-full bg-[var(--accent)] animate-[pulse_2s_ease-out_infinite]" aria-hidden="true"></span>
          {t('status')}
        </div>

        <div className="flex items-center gap-4 flex-wrap mb-6">
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
