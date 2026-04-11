import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const router = useRouter();
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const changeLanguage = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          KARLA AGRAZ
        </Link>
        <nav>
          <a href="#work">{t('work').toUpperCase()}</a>
          <Link href="/experience">{t('about').toUpperCase()}</Link>
          <a href="#contact">{t('contact').toUpperCase()}</a>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <div className="lang-switcher">
            <button
              onClick={() => changeLanguage('es')}
              className={locale === 'es' ? 'active' : ''}
              aria-label="Cambiar a español"
            >
              [ES]
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={locale === 'en' ? 'active' : ''}
              aria-label="Switch to English"
            >
              [EN]
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
