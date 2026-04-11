'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import React from 'react';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false, loading: () => <LoadingPlaceholder /> }
);

function LoadingPlaceholder() {
  return (
    <div style={{
      padding: '16px',
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-light)',
      minHeight: '120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <span style={{ color: 'var(--text-muted)', fontSize: '12px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
        Loading...
      </span>
    </div>
  );
}

export function GitHubSection() {
  const [hoveredText, setHoveredText] = useState<string | null>(null);

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

  const handleBlockRender = (block: any, activity: any) => {
    return React.cloneElement(block, {
      onMouseEnter: () => setHoveredText(activity._hoverData),
      onMouseLeave: () => setHoveredText(null),
    });
  };

  return (
    <section className="github-section">
      <div className="container">

        <div className="github-calendar-wrapper">
          <GitHubCalendar
            username="csswoman"
            colorScheme="dark"
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
