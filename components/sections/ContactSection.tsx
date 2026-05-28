'use client';

import { useTranslations } from 'next-intl';
import { personalInfo } from '@/lib/constants';
import { trackContactEmailClick, trackSocialLinkClick } from '@/lib/analytics';

export function ContactSection() {
  const t = useTranslations();

  const links = [
    { label: 'TWITTER', href: 'https://twitter.com/csswoman', type: 'social' as const },
    { label: 'LINKEDIN', href: 'https://linkedin.com/in/karlaagraz', type: 'social' as const },
    { label: 'GITHUB', href: 'https://github.com/csswoman', type: 'social' as const },
    { label: t('Contact.email').toUpperCase(), href: `mailto:${personalInfo.email}`, type: 'email' as const },
  ];

  return (
    <section className="py-8 relative z-[1]" id="contact" aria-label={t('Contact.elsewhere')}>
      <div className="max-w-3xl mx-auto">
        <h2 className="tracking-[2px] uppercase text-[var(--text-dim)] mb-4 font-medium text-[14px]">
          {t('Contact.elsewhere').toUpperCase()}
        </h2>
        <div className="flex gap-6 flex-wrap">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="inline-flex items-center gap-1.5 min-h-11 px-1 text-sm text-[var(--accent)] tracking-[0.5px] uppercase transition-colors duration-300 hover:text-[var(--orange)] border-b border-b-transparent hover:border-b-[var(--orange)]"
              aria-label={link.type === 'email' ? t('Contact.email') : `${link.label} ${t('Contact.social')}`}
              onClick={() => {
                if (link.type === 'email') {
                  trackContactEmailClick(personalInfo.email);
                  return;
                }
                trackSocialLinkClick(link.label.toLowerCase(), link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

