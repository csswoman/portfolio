'use client';

import { useTranslations } from 'next-intl';

export function SkipLink() {
  const t = useTranslations('A11y');

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded focus:bg-[var(--bg-card)] focus:text-[var(--text-primary)] focus:outline-2 focus:outline-[var(--accent)]"
    >
      {t('skipToMain')}
    </a>
  );
}
