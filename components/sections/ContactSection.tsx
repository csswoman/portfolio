import { useTranslations } from 'next-intl';
import { personalInfo } from '@/lib/constants';

export function ContactSection() {
  const t = useTranslations();

  const links = [
    { label: 'TWITTER', href: 'https://twitter.com/csswoman' },
    { label: 'LINKEDIN', href: 'https://linkedin.com/in/karlaagraz' },
    { label: 'GITHUB', href: 'https://github.com/csswoman' },
    { label: 'EMAIL', href: `mailto:${personalInfo.email}` },
  ];

  return (
    <section className="section reveal" id="contact">
      <div className="container">
        <div className="section-label">ELSEWHERE</div>
        <div className="links-row">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

