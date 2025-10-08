import type { Meta, StoryObj } from "@storybook/react";
import { SkillsList } from "./SkillsList";

const meta = {
  title: "UI/SkillsList",
  component: SkillsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SkillsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

