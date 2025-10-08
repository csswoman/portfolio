import { NextSeo } from "next-seo";
import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  WorkSection,
  AboutSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Inicio"
        description="Portfolio de Karla Agraz, UX Engineer especializada en crear soluciones digitales que mejoran la experiencia del usuario."
      />
      <Header />
      <main>
        <HeroSection />
        <div className="pt-20 lg:pt-32 px-4 flex flex-col gap-20 lg:gap-32">
          <WorkSection />
          <AboutSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

