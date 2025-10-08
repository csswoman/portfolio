import type { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  defaultTitle: "Karla Agraz | UX Engineer Portfolio",
  titleTemplate: "%s | Karla Agraz",
  description:
    "Portfolio de Karla Agraz, UX Engineer con 2 años de experiencia en diseño y desarrollo de interfaces. Especializada en crear soluciones digitales que mejoran la experiencia del usuario.",
  canonical: "https://tudominio.com", // Actualiza con tu dominio
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tudominio.com",
    siteName: "Karla Agraz Portfolio",
    title: "Karla Agraz | UX Engineer Portfolio",
    description:
      "Portfolio de Karla Agraz, UX Engineer especializada en diseño y desarrollo de interfaces web.",
    images: [
      {
        url: "https://tudominio.com/images/og-image.jpg", // Crea esta imagen
        width: 1200,
        height: 630,
        alt: "Karla Agraz - UX Engineer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@csswoman",
    site: "@csswoman",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "UX Engineer, Diseño Web, Frontend Developer, React, Next.js, Tailwind CSS, Portfolio, Karla Agraz",
    },
    {
      name: "author",
      content: "Karla Agraz",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#03001e",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/icons/favicon.svg",
    },
    {
      rel: "apple-touch-icon",
      href: "/icons/favicon.svg",
      sizes: "76x76",
    },
  ],
};

export default SEO;

