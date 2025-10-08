import type {
  Project,
  WorkExperience,
  Education,
  Skill,
  Tool,
  Language,
  SocialLink,
  PersonalInfo,
} from "@/types";

// Datos de proyectos
export const projects: Project[] = [
  {
    id: 1,
    title: "Café Bistro",
    description: "Creado con HTML & CSS",
    image: "/images/projects/coffee.jpg",
    url: "https://csswoman.github.io/cafe-bistro/",
  },
  {
    id: 2,
    title: "Travels and Tours",
    description: "Creado con HTML & CSS",
    image: "/images/projects/travels.jpg",
    url: "https://csswoman.github.io/travel-and-tours/",
  },
  {
    id: 3,
    title: "Celeste Art Shop",
    description: "Creado con Bootstrap",
    image: "/images/projects/celeste.jpg",
    url: "https://celeste-art-shop.vercel.app/",
  },
];

// Experiencia laboral
export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Diseñadora web",
    company: "Uniqo agency",
    period: "Nov 2022 - Feb 2023 (4 meses)",
    description:
      "Entre las labores que realicé fueron: editar plantillas de WordPress, integración de plugins maquetación de componentes en HubSpot.",
  },
  {
    id: 2,
    title: "Web UI Developer",
    company: "Denomades",
    period: "May 2021 - Ago 2022 (1 año y 4 meses)",
    description:
      "Entre las labores que realicé fueron: Desarrollar y corregir funcionalidades en las diferentes plataformas de la empresa, Participar en procesos de migración de las diferentes plataformas de la empresa, Mejorar la UX del website con puntuación de 100 en accesibilidad en Lighthouse, Diseñar mockups en papel para determinar la UX/UI, Agregar los nuevos UI componentes a la guía de estilos del proyecto (ej. botones, inputs, menús, etc.), Dar soporte tecnológico al resto de áreas de la empresa.",
  },
  {
    id: 3,
    title: "Diseñadora web",
    company: "Freelancer",
    period: "Dic 2021 - Mar 2022 (4 meses)",
    description: "Desarrollo de sitios web con React para clientes extranjeros.",
  },
  {
    id: 4,
    title: "Maquetadora web",
    company: "EDteam",
    period: "Nov 2020 - Ene 2021 (3 meses)",
    description:
      "Maquetación de componentes, detectar errores en la maquetación y corregirlos.",
  },
];

// Educación
export const education: Education[] = [
  {
    id: 1,
    title: "Programa de Frontend de Facebook Developers Circles",
    institution: "Platzi",
    period: "2019 - 2020",
  },
  {
    id: 2,
    title: "Responsive Web Design Certification",
    institution: "freeCodeCamp",
    period: "2020 - 2021",
  },
  {
    id: 3,
    title: "Bootcamp de Front-End",
    institution: "Front-End Foxes School",
    period: "2021 - 2021",
  },
];

// Habilidades técnicas
export const skills: Skill[] = [
  { name: "HTML", icon: "/icons/html.svg", width: 29, height: 32 },
  { name: "CSS", icon: "/icons/css.svg", width: 27, height: 32 },
  { name: "JavaScript", icon: "/icons/javascript.svg", width: 38, height: 38 },
  { name: "Tailwind", icon: "/icons/tailwind.svg", width: 42, height: 38 },
];

// Herramientas
export const tools: Tool[] = [
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Notion", icon: "/icons/notion.svg" },
  { name: "Git", icon: "/icons/git.svg" },
];

// Idiomas
export const languages: Language[] = [
  { name: "Español", level: "nativo" },
  { name: "Inglés", level: "A2" },
];

// Redes sociales
export const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    url: "https://twitter.com/csswoman",
    icon: "/icons/twitter.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/csswoman/",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "GitHub",
    url: "https://www.github.com/csswoman",
    icon: "/icons/github.svg",
  },
];

// Información personal
export const personalInfo: PersonalInfo = {
  name: "Karla Agraz",
  username: "@csswoman",
  title: "UX Engineer",
  email: "dev.csswoman@gmail.com",
  heroImage: "/images/5.jpg",
  aboutImage: "/images/4.jpg",
  contactImage: "/images/3.jpg",
};

