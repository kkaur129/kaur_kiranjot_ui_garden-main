import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableFooter } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell header>Name</TableCell>
          <TableCell header>Email</TableCell>
          <TableCell header align="right">
            Age
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell align="right">28</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell align="right">32</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>{""}</TableCell>
          <TableCell align="right">2 users</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  args: { disabled: false },
};

export const Disabled: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell header>Product</TableCell>
          <TableCell header align="right">
            Price
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Item 1</TableCell>
          <TableCell align="right">$10.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  args: { disabled: true },
};
