'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function Header() {
  const t = useTranslations('Header');
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const handleThemeToggle = () => {
    if (!mounted) return;
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <header className="fixed w-full top-0 z-10">
      <div className="container py-4 flex justify-between items-center">
        <a
          href="/"
          className="hidden sm:flex items-center font-display font-bold text-text-primary"
          aria-label={t('goToHome')}
        >
          @csswoman
        </a>
        <nav className="flex gap-4 items-center ml-auto">
          <a className="text-text-secondary hover:text-text-primary transition-colors text-sm" href="#work">
            {t('work')}
          </a>
          <a className="text-text-secondary hover:text-text-primary transition-colors text-sm" href="#about">
            {t('about')}
          </a>
          <a className="text-text-secondary hover:text-text-primary transition-colors text-sm" href="#contact">
            {t('contact')}
          </a>

          {/* Language Switcher */}
          <div className="flex gap-1 p-1 bg-accent-dim rounded-md backdrop-blur-sm">
            <button
              onClick={() => changeLanguage('es')}
              className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
                locale === 'es'
                  ? 'bg-accent text-bg-primary'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
              aria-label="Cambiar a español"
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
                locale === 'en'
                  ? 'bg-accent text-bg-primary'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

