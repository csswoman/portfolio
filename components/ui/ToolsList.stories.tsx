import type { Meta, StoryObj } from "@storybook/react";
import { ToolsList } from "./ToolsList";

const meta = {
  title: "UI/ToolsList",
  component: ToolsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToolsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

