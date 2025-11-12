import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    borderRadius: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/400x300",
    alt: "Placeholder image",
    width: "400px",
    height: "300px",
  },
};

export const Disabled: Story = {
  args: {
    src: "https://via.placeholder.com/400x300",
    alt: "Disabled image",
    width: "400px",
    height: "300px",
    disabled: true,
  },
};

export const Rounded: Story = {
  args: {
    src: "https://via.placeholder.com/400x300",
    alt: "Rounded image",
    width: "400px",
    height: "300px",
    borderRadius: "16px",
  },
};
