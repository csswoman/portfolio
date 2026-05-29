'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';

const MOBILE_MAX_WIDTH = '(max-width: 767px)';

function scrollElementToEnd(element: HTMLElement) {
  const maxScroll = element.scrollWidth - element.clientWidth;
  if (maxScroll > 0) {
    element.scrollLeft = maxScroll;
  }
}

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('dark');

  const dateLocale = locale === 'es' ? 'es-MX' : 'en-US';

  const scrollToRecentContributions = useCallback(() => {
    if (!scrollRef.current || !window.matchMedia(MOBILE_MAX_WIDTH).matches) {
      return;
    }

    scrollElementToEnd(scrollRef.current);

    const libraryScroll = scrollRef.current.querySelector(
      '.react-activity-calendar__scroll-container'
    );
    if (libraryScroll instanceof HTMLElement) {
      scrollElementToEnd(libraryScroll);
    }
  }, []);

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

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const runScroll = () => {
      requestAnimationFrame(scrollToRecentContributions);
    };

    runScroll();

    const resizeObserver = new ResizeObserver(runScroll);
    resizeObserver.observe(root);

    const mutationObserver = new MutationObserver(runScroll);
    mutationObserver.observe(root, { childList: true, subtree: true });

    const media = window.matchMedia(MOBILE_MAX_WIDTH);
    const onMediaChange = () => runScroll();
    media.addEventListener('change', onMediaChange);

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      media.removeEventListener('change', onMediaChange);
    };
  }, [scrollToRecentContributions]);

  return (
    <section className="mt-8" aria-labelledby="github-section-title">
      <div className="content-shell">
        <h2 id="github-section-title" className="sr-only">
          {t('title')}
        </h2>
        <div className="relative">
          <p id="github-scroll-hint" className="sr-only">
            {t('scrollHint')}
          </p>
          <div
            ref={scrollRef}
            className="overflow-x-auto md:overflow-visible no-scrollbar pr-2 md:pr-0"
            tabIndex={0}
            role="region"
            aria-label={t('title')}
            aria-describedby="github-scroll-hint"
          >
            <div className="github-calendar-wrapper w-max min-w-full pb-1">
              <GitHubCalendar
                username="csswoman"
                colorScheme={colorScheme}
                year="last"
                blockSize={10}
                blockMargin={2}
                blockRadius={2}
                fontSize={10}
                showColorLegend={false}
                showTotalCount={true}
                labels={{
                  totalCount: hoveredText || t.raw('totalContributions'),
                }}
                theme={{
                  dark: ['var(--bg-card)', 'color-mix(in oklab, var(--accent) 30%, var(--bg-card))', 'color-mix(in oklab, var(--accent) 55%, var(--bg-card))', 'color-mix(in oklab, var(--accent) 80%, var(--bg-card))', 'var(--accent)'],
                  light: ['var(--bg-card)', 'color-mix(in oklab, var(--accent) 30%, var(--bg-primary))', 'color-mix(in oklab, var(--accent) 50%, var(--bg-primary))', 'color-mix(in oklab, var(--accent) 70%, var(--bg-primary))', 'var(--accent)'],
                }}
                style={{
                  fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
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
          <div
            className="github-fade-edge-start pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:hidden"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
