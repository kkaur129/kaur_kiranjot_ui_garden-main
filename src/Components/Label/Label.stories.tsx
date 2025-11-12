import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Label } from "../Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { children: "Default Label" },
};

export const Disabled: Story = {
  args: { children: "Disabled Label", disabled: true },
};

export const Required: Story = {
  args: { children: "Required Field", required: true },
};
