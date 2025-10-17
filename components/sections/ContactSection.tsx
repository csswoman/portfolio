import { useTranslations } from "next-intl";
import Image from "next/image";
import { SocialLinks } from "@/components/ui";
import { personalInfo } from "@/lib/constants";

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section
      className="wrapper mx-auto flex flex-col items-center mb-4 text-sm sm:text-base"
      id="contact"
    >
      <h2 className="title text-4xl mb-4 md:mb-10 text-center">
        {t("title")}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="mx-auto">
          <Image
            src={personalInfo.contactImage}
            alt="Contact"
            width={200}
            height={200}
            sizes="200px"
          />
        </div>
        <article className="contact text-center px-6 py-4 rounded-lg">
          <p className="mb-6">
            {t("description")}
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="underline text-purple-300 hover:text-purple-200 transition-colors"
          >
            {personalInfo.email}
          </a>
        </article>
      </div>
      <SocialLinks />
    </section>
  );
}

