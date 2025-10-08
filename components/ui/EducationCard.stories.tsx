import type { Meta, StoryObj } from "@storybook/react";
import { EducationCard } from "./EducationCard";

const meta = {
  title: "UI/EducationCard",
  component: EducationCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EducationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    education: {
      id: 1,
      title: "Programa de Frontend de Facebook Developers Circles",
      institution: "Platzi",
      period: "2019 - 2020",
    },
  },
};

export const Certification: Story = {
  args: {
    education: {
      id: 2,
      title: "Responsive Web Design Certification",
      institution: "freeCodeCamp",
      period: "2020 - 2021",
    },
  },
};

