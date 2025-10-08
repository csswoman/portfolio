import type { Meta, StoryObj } from "@storybook/react";
import { LanguagesList } from "./LanguagesList";

const meta = {
  title: "UI/LanguagesList",
  component: LanguagesList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LanguagesList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

