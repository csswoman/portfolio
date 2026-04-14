'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import React from 'react';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false, loading: () => <LoadingPlaceholder /> }
);

function LoadingPlaceholder() {
  return (
    <div className="p-4 bg-[var(--bg-card)] rounded-md border border-[var(--border-light)] min-h-[120px] flex items-center justify-center">
      <span className="text-[var(--text-muted)] text-[12px] tracking-[0.5px] uppercase">
        Loading...
      </span>
    </div>
  );
}

export function GitHubSection() {
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('dark');

  const transformDataWithHover = (contributions: any[]) => {
    return contributions.map((activity) => ({
      ...activity,
      _hoverData: `${activity.count} ${activity.count === 1 ? 'CONTRIBUTION' : 'CONTRIBUTIONS'} ON ${new Date(activity.date).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }).toUpperCase()}`,
    }));
  };

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

  const handleBlockRender = (block: any, activity: any) => {
    return React.cloneElement(block, {
      onMouseEnter: () => setHoveredText(activity._hoverData),
      onMouseLeave: () => setHoveredText(null),
    });
  };

  return (
    <section className="mt-8">
      <div className="max-w-3xl">
        <div className="github-calendar-wrapper">
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
              totalCount: hoveredText || '{{count}} contributions in the last year',
            }}
            theme={{
              dark: ['#1a1a1a', '#4a2d6b', '#6b3fa0', '#8b5cf6', '#b78edb'],
              light: ['#e8e9eb', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed'],
            }}
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            } as React.CSSProperties}
            transformData={transformDataWithHover}
            renderBlock={handleBlockRender}
          />
        </div>
      </div>
    </section>
  );
}
