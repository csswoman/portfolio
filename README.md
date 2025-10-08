# Portfolio - Karla Agraz

Portfolio personal construido con **Next.js 14**, **TypeScript**, **Tailwind CSS** y **Storybook** siguiendo las mejores prácticas de desarrollo profesional.

## 🚀 Tecnologías

- **Next.js 14** - Framework de React con SSR y SSG
- **TypeScript 5** - Tipado estático para JavaScript
- **React 18** - Biblioteca de UI
- **Tailwind CSS 3** - Framework de CSS utility-first
- **next-seo** - Gestión avanzada de SEO
- **Storybook 7** - Documentación de componentes
- **PostCSS** - Procesador de CSS

## ⚡ Características

- ✅ **TypeScript** - Tipado fuerte en todo el proyecto
- ✅ **SEO Optimizado** - Meta tags, Open Graph, Twitter Cards
- ✅ **Performance Optimizado** - Lighthouse Score 95-100 🎯
- ✅ **Storybook** - Documentación visual de componentes
- ✅ **Path Aliases** - Imports limpios con `@/`
- ✅ **Componentes Reutilizables** - Arquitectura modular
- ✅ **Responsive Design** - Optimizado para todos los dispositivos
- ✅ **Optimización de Imágenes** - next/image con sizes responsivos
- ✅ **Accesibilidad** - ARIA labels y navegación por teclado
- ✅ **Modern JavaScript** - Sin polyfills innecesarios

## 📁 Estructura del Proyecto

```
portfolio/
├── .storybook/           # Configuración de Storybook
│   ├── main.ts
│   └── preview.ts
├── components/
│   ├── layout/           # Componentes de estructura
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── sections/         # Secciones principales
│   │   ├── HeroSection.tsx
│   │   ├── WorkSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── index.ts
│   └── ui/              # Componentes UI reutilizables
│       ├── SocialLinks.tsx
│       ├── ProjectCard.tsx + .stories.tsx
│       ├── ExperienceCard.tsx + .stories.tsx
│       ├── EducationCard.tsx + .stories.tsx
│       ├── SkillsList.tsx + .stories.tsx
│       ├── ToolsList.tsx + .stories.tsx
│       ├── LanguagesList.tsx + .stories.tsx
│       └── index.ts
├── lib/
│   ├── constants.ts      # Datos estáticos tipados
│   └── seo.config.ts     # Configuración de SEO
├── pages/
│   ├── _app.tsx          # App con SEO global
│   ├── _document.tsx     # Document personalizado
│   └── index.tsx         # Página principal con SEO
├── public/
│   ├── fonts/            # Fuentes personalizadas
│   ├── icons/            # Iconos SVG
│   ├── images/           # Imágenes optimizadas
│   ├── robots.txt        # SEO: Crawlers
│   └── sitemap.xml       # SEO: Sitemap
├── styles/
│   └── globals.css       # Estilos globales
├── types/
│   └── index.ts          # Tipos TypeScript centralizados
├── tsconfig.json         # Configuración de TypeScript
├── next.config.js        # Configuración de Next.js
└── tailwind.config.cjs   # Configuración de Tailwind
```

## 💻 Instalación

```bash
# Instalar dependencias
npm install
# o
yarn install
```

## 🛠️ Comandos de Desarrollo

### Desarrollo

```bash
# Iniciar servidor de desarrollo (http://localhost:3000)
npm run dev
# o
yarn dev
```

### Storybook

```bash
# Iniciar Storybook (http://localhost:6006)
npm run storybook
# o
yarn storybook
```

### Compilación

```bash
# Build de producción
npm run build
# o
yarn build

# Build de Storybook
npm run build-storybook
# o
yarn build-storybook
```

### Producción

```bash
# Iniciar servidor de producción
npm start
# o
yarn start
```

## 🎯 TypeScript

### Tipos Principales

El proyecto incluye tipos TypeScript completos en `types/index.ts`:

```typescript
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

// ... más tipos
```

### Beneficios

- ✅ Autocompletado inteligente
- ✅ Detección de errores en tiempo de desarrollo
- ✅ Refactoring seguro
- ✅ Documentación automática

## 🔍 SEO

### Configuración Global

El SEO está configurado globalmente en `lib/seo.config.ts`:

```typescript
const SEO: DefaultSeoProps = {
  defaultTitle: "Karla Agraz | UX Engineer Portfolio",
  description: "Portfolio de Karla Agraz...",
  openGraph: {
    type: "website",
    locale: "es_ES",
    // ...
  },
  twitter: {
    handle: "@csswoman",
    cardType: "summary_large_image",
  },
};
```

### SEO por Página

Cada página puede personalizar su SEO:

```typescript
<NextSeo
  title="Inicio"
  description="Portfolio personalizado..."
/>
```

### Archivos SEO

- `public/robots.txt` - Control de crawlers
- `public/sitemap.xml` - Mapa del sitio

## 📚 Storybook

### Ver Componentes

```bash
npm run storybook
```

Abre http://localhost:6006 para ver:
- Todos los componentes UI documentados
- Diferentes variantes y estados
- Props interactivos
- Código fuente

### Crear Nueva Story

```typescript
// components/ui/MiComponente.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MiComponente } from "./MiComponente";

const meta = {
  title: "UI/MiComponente",
  component: MiComponente,
  tags: ["autodocs"],
} satisfies Meta<typeof MiComponente>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // tus props aquí
  },
};
```

## 📝 Cómo Editar el Contenido

### 1. Actualizar Información Personal

Edita `lib/constants.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Tu Nombre",
  email: "tu@email.com",
  // ...
};
```

### 2. Agregar Proyectos

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Mi Proyecto",
    description: "Descripción",
    image: "/images/projects/proyecto.jpg",
    url: "https://mi-proyecto.com",
  },
  // ... más proyectos
];
```

### 3. Actualizar Experiencia

```typescript
export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Mi Puesto",
    company: "Mi Empresa",
    period: "2023 - Presente",
    description: "Descripción del rol",
  },
];
```

### 4. Modificar SEO

Edita `lib/seo.config.ts` y actualiza:
- Title y description
- URL canónica
- Imágenes Open Graph
- Twitter handle

## 🎨 Personalización

### Colores

Modifica `styles/globals.css`:

```css
:root {
  --background-color: #03001e;
  --color-text: #D9D9D9;
  --white-color: #ffffff;
}
```

### Fuentes

Las fuentes están en `styles/globals.css`:
- **Inter** - Google Fonts
- **Recoleta** - `/public/fonts/recoleta-bold.ttf`

## 🏗️ Arquitectura

### Componentes

- **layout/** - Estructura (Header, Footer)
- **sections/** - Secciones completas de página
- **ui/** - Componentes pequeños y reutilizables

### Datos

- **lib/constants.ts** - Single source of truth para datos
- **types/index.ts** - Interfaces TypeScript

### Ventajas

- ✅ **Separación de concerns** - UI separada de datos
- ✅ **Reutilización** - Componentes pequeños y específicos
- ✅ **Type Safety** - TypeScript en todo el proyecto
- ✅ **Testeable** - Componentes puros y aislados
- ✅ **Documentado** - Stories de Storybook

## 🚀 Deployment

### Vercel (Recomendado)

1. Push a GitHub
2. Conecta con Vercel
3. Deploy automático

### Otros Servicios

```bash
# Build
npm run build

# Los archivos están en .next/
```

## 📧 Contacto

**Karla Agraz**
- GitHub: [@csswoman](https://github.com/csswoman)
- Twitter: [@csswoman](https://twitter.com/csswoman)
- LinkedIn: [csswoman](https://linkedin.com/in/csswoman)
- Email: dev.csswoman@gmail.com

## 📄 Licencia

© 2023 Karla Agraz

---

**Hecho con ❤️ usando Next.js, TypeScript, Tailwind CSS y Storybook**
