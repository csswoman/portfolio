import type { Meta, StoryObj } from "@storybook/react";
import { SocialLinks } from "./SocialLinks";

const meta = {
  title: "UI/SocialLinks",
  component: SocialLinks,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SocialLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

