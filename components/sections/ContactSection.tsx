'use client';

import { useTranslations } from 'next-intl';
import { personalInfo, socialLinks } from '@/lib/constants';
import { trackContactEmailClick, trackSocialLinkClick } from '@/lib/analytics';

export function ContactSection() {
  const t = useTranslations();

  const links = [
    ...socialLinks.map((link) => ({
      label: link.name.toUpperCase(),
      href: link.url,
      type: 'social' as const,
    })),
    { label: t('Contact.email').toUpperCase(), href: `mailto:${personalInfo.email}`, type: 'email' as const },
  ];

  return (
    <section className="py-8 relative z-[1]" id="contact" aria-label={t('Contact.elsewhere')}>
      <div className="content-shell">
        <h2 className="section-headline">
          {t('Contact.elsewhere')}
        </h2>
        <div className="flex flex-wrap gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="text-label inline-flex min-h-11 items-center gap-1.5 border-b border-b-transparent px-1 text-[var(--accent)] transition-colors duration-200 hover:border-b-[var(--orange)] hover:text-[var(--orange)]"
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

