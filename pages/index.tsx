import { NextSeo } from "next-seo";
import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  WorkSection,
  AboutSection,
  ContactSection,
  JournalSection,
} from "@/components/sections";
import { GetStaticPropsContext } from 'next';
import { useEffect } from 'react';

const OrnamentDivider = () => (
  <div className="ornament-divider" aria-hidden="true">
    <span className="line"></span>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
    </svg>
    <span className="line"></span>
  </div>
);

export default function Home() {
  useEffect(() => {
    // Initialize theme
    const html = document.documentElement;
    const saved = localStorage.getItem('theme');
    if (saved) {
      html.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme:light)').matches) {
      html.setAttribute('data-theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
    }

    // Intersection Observer for .reveal elements
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            el.target.classList.add('visible');
            obs.unobserve(el.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => obs.unobserve(el));
    };
  }, []);

  return (
    <>
      <NextSeo
        title="Karla Agraz — UI Engineer & Interaction Designer"
        description="UX Engineer especializada en crear soluciones digitales que mejoran la experiencia del usuario."
      />
      <Header />
      <main className="container">
        <HeroSection />

        <OrnamentDivider />

        <WorkSection />

        <OrnamentDivider />

        <AboutSection />

        <OrnamentDivider />

        <JournalSection />

        <OrnamentDivider />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
      locale,
    },
  };
}

