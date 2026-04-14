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
    <section className="pt-6 md:pt-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-[40px] mb-2 font-bold text-[var(--text-primary)] -tracking-[1px] uppercase flex items-center">
          {personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[1]}
          <span className="text-[13px] text-[var(--text-muted)] uppercase tracking-[0.5px]">&nbsp;/{personalInfo.username}</span>
        </h1>
        <p className="text-[13px] font-semibold text-[var(--text-primary)] mb-4 tracking-[2px] uppercase">{t('role')}</p>
        <p className="text-[14px] font-normal text-[var(--text-muted)] mb-6 tracking-[0.2px]">{t('tagline')}</p>

        <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)] max-w-[520px] mb-2">
          {t('description')}
        </p>

        <div className="inline-flex items-center gap-2  mb-6 text-[12px] text-[var(--accent)] tracking-[0.5px] uppercase font-medium">
          <span className="w-[6px] h-[6px] rounded-full bg-[var(--accent)] animate-[pulse_2s_ease-in-out_infinite]"></span>
          {t('status')}
        </div>

        <div className="flex items-center gap-4 flex-wrap mb-6">
          <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-1.5 py-2.5 px-4.5 border border-[var(--accent)] text-[var(--accent)] bg-transparent text-[12px] font-medium uppercase tracking-[0.5px] transition-all duration-200 hover:bg-[var(--accent-dim)] hover:shadow-[0_0_10px_rgba(183,142,219,0.2)] hover:scale-[1.02] rounded-md">
            {t('letsWork')}
          </a>
          <Link href="/experience" className="inline-flex items-center gap-1.5 py-2.5 px-4.5 border border-[var(--accent)] text-[var(--accent)] bg-transparent text-[12px] font-medium uppercase tracking-[0.5px] transition-all duration-200 hover:bg-[var(--accent-dim)] hover:shadow-[0_0_10px_rgba(183,142,219,0.2)] hover:scale-[1.02] rounded-md">
            {t('viewExperience')}
          </Link>
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 py-2.5 px-4.5 border border-[var(--border-medium)] text-[var(--text-muted)] bg-transparent text-[11px] tracking-[0.3px] uppercase font-medium transition-all duration-200 hover:scale-[1.02] hover:text-[var(--text-secondary)] rounded-md"
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
