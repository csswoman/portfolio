import type { Meta, StoryObj } from "@storybook/react";
import { ExperienceCard } from "./ExperienceCard";

const meta = {
  title: "UI/ExperienceCard",
  component: ExperienceCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExperienceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    experience: {
      id: 1,
      title: "Diseñadora web",
      company: "Uniqo agency",
      period: "Nov 2022 - Feb 2023 (4 meses)",
      description:
        "Entre las labores que realicé fueron: editar plantillas de WordPress, integración de plugins maquetación de componentes en HubSpot.",
    },
  },
};

export const SeniorRole: Story = {
  args: {
    experience: {
      id: 2,
      title: "Web UI Developer",
      company: "Denomades",
      period: "May 2021 - Ago 2022 (1 año y 4 meses)",
      description:
        "Desarrollar y corregir funcionalidades en las diferentes plataformas de la empresa. Mejorar la UX del website con puntuación de 100 en accesibilidad en Lighthouse.",
    },
  },
};

