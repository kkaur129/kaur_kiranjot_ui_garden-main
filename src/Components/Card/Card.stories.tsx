import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    hoverable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    children: "This is the card content.",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Card",
    children: "This card is in a disabled state.",
    disabled: true,
  },
};

export const Hoverable: Story = {
  args: {
    title: "Hoverable Card",
    children: "Hover over this card!",
    hoverable: true,
  },
};
