'use client';

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useMediaQuery } from '@/lib/useMediaQuery';

function CalendarLoading() {
  const t = useTranslations('GitHub');
  return <LoadingPlaceholder label={t('loading')} />;
}

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false, loading: () => <CalendarLoading /> }
);

function LoadingPlaceholder({ label }: { label: string }) {
  return (
    <div className="p-4 bg-[var(--bg-card)] rounded-md border border-[var(--border-light)] min-h-[120px] flex items-center justify-center">
      <span className="text-label text-[var(--text-muted)]">
        {label}
      </span>
    </div>
  );
}

export function GitHubSection() {
  const t = useTranslations('GitHub');
  const locale = useLocale();
  const isCompact = useMediaQuery('(max-width: 768px)');
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('dark');

  const blockSize = isCompact ? 14 : 10;
  const blockMargin = isCompact ? 3 : 2;
  const fontSize = isCompact ? 11 : 10;
  const dateLocale = locale === 'es' ? 'es-MX' : 'en-US';

  const formatActivityLabel = useCallback(
    (count: number, dateIso: string) => {
      const date = new Date(dateIso).toLocaleDateString(dateLocale, {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      });
      return count === 1
        ? t('contributionOne', { count, date })
        : t('contributionMany', { count, date });
    },
    [dateLocale, t]
  );

  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' || 'dark';
      setColorScheme(theme);
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-8" aria-labelledby="github-section-title">
      <div className="content-shell">
        <h2 id="github-section-title" className="sr-only">
          {t('title')}
        </h2>
        <div className="github-calendar-wrapper">
          <GitHubCalendar
            username="csswoman"
            colorScheme={colorScheme}
            year="last"
            blockSize={blockSize}
            blockMargin={blockMargin}
            blockRadius={2}
            fontSize={fontSize}
            showColorLegend={false}
            showTotalCount={true}
            labels={{
              totalCount: hoveredText || t('totalContributions'),
            }}
            theme={{
              dark: ['var(--bg-card)', 'color-mix(in oklab, var(--accent) 30%, var(--bg-card))', 'color-mix(in oklab, var(--accent) 55%, var(--bg-card))', 'color-mix(in oklab, var(--accent) 80%, var(--bg-card))', 'var(--accent)'],
              light: ['var(--bg-card)', 'color-mix(in oklab, var(--accent) 30%, var(--bg-primary))', 'color-mix(in oklab, var(--accent) 50%, var(--bg-primary))', 'color-mix(in oklab, var(--accent) 70%, var(--bg-primary))', 'var(--accent)'],
            }}
            style={{
              fontFamily: 'var(--font-mono), ui-monospace, monospace',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            } as React.CSSProperties}
            renderBlock={(block, activity) => {
              const hoverText = formatActivityLabel(activity.count, activity.date);

              return React.cloneElement(block, {
                onMouseEnter: () => setHoveredText(hoverText),
                onMouseLeave: () => setHoveredText(null),
                onFocus: () => setHoveredText(hoverText),
                onBlur: () => setHoveredText(null),
              });
            }}
          />
          <p className="sr-only" aria-live="polite">
            {hoveredText || t('loading')}
          </p>
        </div>
      </div>
    </section>
  );
}
