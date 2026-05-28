'use client';

import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="content-shell my-4 text-center text-label text-[var(--text-muted)]">
      {t('copyright', { year: new Date().getFullYear() })}
    </footer>
  );
}
