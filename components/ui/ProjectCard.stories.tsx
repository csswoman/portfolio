import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./ProjectCard";

const meta = {
  title: "UI/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: {
      id: 1,
      title: "Café Bistro",
      description: "Creado con HTML & CSS",
      image: "/images/projects/coffee.jpg",
      url: "https://csswoman.github.io/cafe-bistro/",
    },
    priority: false,
  },
};

export const CelesteProject: Story = {
  args: {
    project: {
      id: 2,
      title: "Celeste Art Shop",
      description: "Creado con Bootstrap",
      image: "/images/projects/celeste.jpg",
      url: "https://celeste-art-shop.vercel.app/",
    },
    priority: false,
  },
};

export const WithPriority: Story = {
  args: {
    project: {
      id: 1,
      title: "Café Bistro (LCP)",
      description: "Primer proyecto con priority para optimizar LCP",
      image: "/images/projects/coffee.jpg",
      url: "https://csswoman.github.io/cafe-bistro/",
    },
    priority: true,
  },
};

