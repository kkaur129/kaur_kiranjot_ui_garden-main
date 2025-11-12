import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    size: { control: { type: "select" }, options: ["small", "medium", "large"] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Default Button", disabled: false },
};

export const Disabled: Story = {
  args: { children: "Disabled Button", disabled: true },
};

export const CustomColor: Story = {
  args: { children: "Custom Color", backgroundColor: "#28a745" },
};
