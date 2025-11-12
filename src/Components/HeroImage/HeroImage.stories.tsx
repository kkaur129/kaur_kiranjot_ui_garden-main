import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    height: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/1200x400",
    alt: "Hero Banner",
    title: "Welcome to Our Site",
    subtitle: "Discover amazing things",
    height: "400px",
  },
};

export const Disabled: Story = {
  args: {
    src: "https://via.placeholder.com/1200x400",
    alt: "Hero Banner",
    title: "Disabled Hero",
    subtitle: "This is disabled",
    disabled: true,
    height: "400px",
  },
};

export const NoText: Story = {
  args: {
    src: "https://via.placeholder.com/1200x400",
    alt: "Hero Banner",
    height: "300px",
  },
};
