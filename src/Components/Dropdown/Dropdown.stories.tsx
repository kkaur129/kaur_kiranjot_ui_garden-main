import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Default: Story = {
  args: { options, placeholder: "Choose an option" },
};

export const Disabled: Story = {
  args: { options, disabled: true, placeholder: "Disabled dropdown" },
};
