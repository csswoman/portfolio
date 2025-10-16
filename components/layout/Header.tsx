import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

export function Header() {
  const t = useTranslations('Header');
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <header className="h-12 sm:h-16 fixed w-full top-0 text-white z-10">
      <div className="flex wrapper p-4 mx-auto justify-between h-full">
        <a
          href="#"
          className="hidden sm:flex items-center logo"
          aria-label={t('goToHome')}
        >
          @csswoman
        </a>
        <nav className="flex w-full justify-end gap-2 text-sm items-center md:text-base">
          <a className="inline-block p-2 font-semibold" href="#work">
            {t('work')}
          </a>
          <a className="inline-block p-2 font-semibold" href="#about">
            {t('about')}
          </a>
          <a className="inline-block p-2 font-semibold" href="#contact">
            {t('contact')}
          </a>
          
          {/* Language Switcher */}
          <div className="flex gap-1 ml-2 p-1 bg-white/10 rounded-md backdrop-blur-sm">
            <button
              onClick={() => changeLanguage('es')}
              className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
                locale === 'es' 
                  ? 'bg-white text-black' 
                  : 'text-white/70 hover:text-white'
              }`}
              aria-label="Cambiar a español"
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
                locale === 'en' 
                  ? 'bg-white text-black' 
                  : 'text-white/70 hover:text-white'
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

