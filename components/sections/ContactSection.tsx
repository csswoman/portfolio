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
    <section className="py-8 relative z-[1]" id="contact">
      <div className="max-w-3xl mx-auto">
        <div className="tracking-[2px] uppercase text-[var(--text-dim)] mb-4 font-medium">ELSEWHERE</div>
        <div className="flex gap-6 flex-wrap">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="inline-flex items-center gap-1.5 text-sm text-[var(--accent)] tracking-[0.5px] uppercase transition-colors duration-300 hover:text-[var(--orange)] border-b border-b-transparent hover:border-b-[var(--orange)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

