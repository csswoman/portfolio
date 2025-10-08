import Image from "next/image";
import { SocialLinks } from "@/components/ui";
import { personalInfo } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="rainbow-bg">
      <div className="mx-auto flex flex-col items-center justify-center h-full text-white hero px-10 max-w-md text-lg">
        <Image
          src={personalInfo.heroImage}
          alt={`Memoji of ${personalInfo.name}`}
          width={160}
          height={160}
          sizes="160px"
          className="mb-8 hero-img"
          priority
        />
        <p className="mb-4">Hey, soy</p>
        <h1 className="text-6xl font-bold mb-6 tracking-wide text-center title">
          {personalInfo.name}
        </h1>
        <p className="mb-8 text-center">
          Como <strong>{personalInfo.title}</strong> me dedico a crear
          soluciones digitales que mejoren la vida de las personas
        </p>
        <SocialLinks />
        <a href="#work" aria-label="Ir a la sección de trabajos">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </a>
      </div>
    </section>
  );
}

