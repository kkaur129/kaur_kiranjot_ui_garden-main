import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    disabled: { control: "boolean" },
    variant: { control: "select", options: ["p", "span", "div", "h1", "h2", "h3"] },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: "Default Text" },
};

export const Disabled: Story = {
  args: { children: "Disabled Text", disabled: true },
};

export const Heading: Story = {
  args: { children: "Heading Text", variant: "h1", fontSize: "32px", fontWeight: "700" },
};
