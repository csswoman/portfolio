'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';

function getInitialTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
}

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export function Header() {
  const locale = useLocale();
  const router = useRouter();
  const [theme, setTheme] = useState<'dark' | 'light'>(() => getInitialTheme());
  const isMounted = useIsClient();

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

  // During SSR and hydration, use a neutral placeholder to avoid mismatch
  const isDark = isMounted ? theme === 'dark' : true;

  return (
    <header className="flex justify-between items-center py-4 max-w-3xl mx-auto relative z-[1]">
        <Link href="/" className="font-bold text-[13px] text-[var(--text-primary)] tracking-[1px] uppercase">
          KARLA AGRAZ
        </Link>
        <nav className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="bg-transparent border-none cursor-pointer p-1 transition-transform duration-300 hover:scale-120 active:scale-95 text-[18px] leading-none"
            aria-label={isMounted ? (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme') : 'Toggle theme'}
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4"/>
                <line x1="12" y1="2" x2="12" y2="6"/>
                <line x1="12" y1="18" x2="12" y2="22"/>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                <line x1="2" y1="12" x2="6" y2="12"/>
                <line x1="18" y1="12" x2="22" y2="12"/>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <div className="flex gap-3 text-[11px] tracking-[0.5px]">
            <button
              onClick={() => changeLanguage('es')}
              className={`bg-transparent border-none text-[var(--text-muted)] cursor-pointer transition-colors duration-300 hover:text-[var(--text-secondary)] p-0 font-[var(--font-mono)] text-[11px] uppercase ${locale === 'es' ? 'text-[var(--accent)]' : ''}`}
              aria-label="Cambiar a español"
              aria-pressed={locale === 'es'}
            >
              [ES]
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`bg-transparent border-none text-[var(--text-muted)] cursor-pointer transition-colors duration-300 hover:text-[var(--text-secondary)] p-0 font-[var(--font-mono)] text-[11px] uppercase ${locale === 'en' ? 'text-[var(--accent)]' : ''}`}
              aria-label="Switch to English"
              aria-pressed={locale === 'en'}
            >
              [EN]
            </button>
          </div>
        </nav>
    </header>
  );
}
