import { useTranslations } from 'next-intl';
import { personalInfo } from '@/lib/constants';

export function ContactSection() {
  const t = useTranslations();

  const links = [
    { label: 'Twitter', href: 'https://twitter.com/csswoman' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/karlaagraz' },
    { label: 'GitHub', href: 'https://github.com/csswoman' },
    { label: 'Email', href: `mailto:${personalInfo.email}` },
  ];

  return (
    <section className="section reveal container" id="contact">
      <div className="section-label">
        <span className="star">★</span> {t('Contact.elsewhere') || 'Elsewhere'}
      </div>
      <div className="links-row">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noopener'}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}

