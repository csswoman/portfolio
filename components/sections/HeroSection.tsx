import Image from "next/image";
import { SocialLinks } from "@/components/ui";
import { personalInfo } from "@/lib/constants";
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('Hero');
  
  return (
    <section className="rainbow-bg">
      <div className="mx-auto flex flex-col items-center justify-center h-full text-white hero px-10 max-w-xl text-lg">
        <Image
          src={personalInfo.heroImage}
          alt={`Memoji of ${personalInfo.name}`}
          width={160}
          height={160}
          sizes="160px"
          className="mb-8 hero-img"
          priority
        />
        <p className="mb-4">{t('greeting')}</p>
        <h1 className="text-6xl font-bold mb-6 tracking-wide text-center title">
          {personalInfo.name}
        </h1>
        <p className="mb-8 text-center">
          {t.rich('description', { 
            role: (chunks) => <strong>{personalInfo.title}</strong>
          })}
        </p>
        <p className="mb-8 text-center">
          {t('description2')}
        </p>
        <SocialLinks />
        <a href="#work" aria-label={t('scrollDown')}>
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </a>
      </div>
    </section>
  );
}

