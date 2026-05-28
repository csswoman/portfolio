'use client';

import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="my-4 mx-auto text-center text-[var(--text-muted)] text-[12px] tracking-[0.5px] uppercase">
      {t('copyright', { year: new Date().getFullYear() })}
    </footer>
  );
}
