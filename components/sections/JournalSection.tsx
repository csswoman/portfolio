'use client';

import { useTranslations } from 'next-intl';

export function JournalSection() {
  const t = useTranslations();

  const posts = [
    {
      date: 'Apr 2026',
      title: t('Journal.post1Title') || 'Coming soon...',
      excerpt: t('Journal.post1Excerpt') || 'I am working on some interesting topics',
    },
  ];

  return (
    <section className="section reveal container">
      <div className="section-label">
        <span className="star">★</span> {t('Journal.title') || 'Journal'}
      </div>
      <div className="journal-list">
        {posts.map((post, i) => (
          <a key={i} href="#" className="journal-item">
            <div className="journal-date">{post.date}</div>
            <div className="journal-title">{post.title}</div>
            <p className="journal-excerpt">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
