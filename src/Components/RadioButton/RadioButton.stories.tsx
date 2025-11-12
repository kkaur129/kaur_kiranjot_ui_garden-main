import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    name: "radio-group",
    value: "option1",
    label: "Option 1",
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    name: "radio-group",
    value: "option2",
    label: "Disabled Option",
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    name: "radio-group",
    value: "option3",
    label: "Checked Option",
    checked: true,
  },
};
