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

// ============================================
// DATOS FIJOS (no traducibles)
// ============================================

// IDs y URLs de proyectos (datos estáticos)
export const projectsData = [
  {
    id: 1,
    image: "/images/projects/coffee.jpg",
    url: "https://csswoman.github.io/cafe-bistro/",
  },
  {
    id: 2,
    image: "/images/projects/travels.jpg",
    url: "https://csswoman.github.io/travel-and-tours/",
  },
  {
    id: 3,
    image: "/images/projects/celeste.jpg",
    url: "https://celeste-art-shop.vercel.app/",
  },
];

// IDs de experiencia laboral
export const workExperienceIds = [1, 2, 3, 4, 5];

// IDs de educación
export const educationIds = [1, 2, 3];

// IDs de idiomas
export const languageIds = ["spanish", "english"] as const;

// ============================================
// FUNCIONES PARA OBTENER DATOS TRADUCIDOS
// ============================================

/**
 * Obtiene la lista de proyectos con traducciones
 * @param t - Función de traducción de next-intl
 * @returns Array de proyectos traducidos
 */
export const getProjects = (t: any): Project[] => {
  return projectsData.map((project) => ({
    ...project,
    title: t(`Projects.${project.id}.title`),
    description: t(`Projects.${project.id}.description`),
  }));
};

/**
 * Obtiene la lista de experiencia laboral con traducciones
 * @param t - Función de traducción de next-intl
 * @returns Array de experiencias traducidas
 */
export const getWorkExperience = (t: any): WorkExperience[] => {
  return workExperienceIds.map((id) => ({
    id,
    title: t(`Experience.${id}.title`),
    company: t(`Experience.${id}.company`),
    period: t(`Experience.${id}.period`),
    description: t(`Experience.${id}.description`),
  }));
};

/**
 * Obtiene la lista de educación con traducciones
 * @param t - Función de traducción de next-intl
 * @returns Array de educación traducida
 */
export const getEducation = (t: any): Education[] => {
  return educationIds.map((id) => ({
    id,
    title: t(`Education.${id}.title`),
    institution: t(`Education.${id}.institution`),
    period: t(`Education.${id}.period`),
  }));
};

/**
 * Obtiene la lista de idiomas con traducciones
 * @param t - Función de traducción de next-intl
 * @returns Array de idiomas traducidos
 */
export const getLanguages = (t: any): Language[] => {
  return languageIds.map((id) => ({
    name: t(`Languages.${id}.name`),
    level: t(`Languages.${id}.level`),
  }));
};

// ============================================
// DATOS QUE NO REQUIEREN TRADUCCIÓN
// ============================================

// Habilidades técnicas (nombres de tecnologías)
export const skills: Skill[] = [
  { name: "HTML", icon: "/icons/html.svg", width: 29, height: 32 },
  { name: "CSS", icon: "/icons/css.svg", width: 27, height: 32 },
  { name: "JavaScript", icon: "/icons/javascript.svg", width: 38, height: 38 },
  { name: "Tailwind", icon: "/icons/tailwind.svg", width: 42, height: 38 },
];

// Herramientas (nombres de software)
export const tools: Tool[] = [
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Notion", icon: "/icons/notion.svg" },
  { name: "Git", icon: "/icons/git.svg" },
];

// Redes sociales (datos fijos)
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

// Información personal (datos fijos)
export const personalInfo: PersonalInfo = {
  name: "Karla Agraz",
  username: "@csswoman",
  title: "UX Engineer",
  email: "dev.csswoman@gmail.com",
  heroImage: "/images/5.jpg",
  aboutImage: "/images/4.jpg",
  contactImage: "/images/3.jpg",
};

// Rutas de CV por idioma
export const cvPaths = {
  es: "/cv/CV-Karla-Agraz-ES.pdf",
  en: "/cv/CV-Karla-Agraz-EN.pdf",
};

