// src/components/Table/Table.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <thead>
        <TableRow>
          <TableHeader>Header 1</TableHeader>
          <TableHeader>Header 2</TableHeader>
          <TableHeader>Header 3</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 4</TableCell>
          <TableCell>Cell 5</TableCell>
          <TableCell>Cell 6</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
          <TableCell>Footer 3</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
};

export const Disabled: Story = {
  render: (args) => (
    <Table {...args} disabled>
      <thead>
        <TableRow disabled>
          <TableHeader disabled>Header 1</TableHeader>
          <TableHeader disabled>Header 2</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow disabled>
          <TableCell disabled>Cell 1</TableCell>
          <TableCell disabled>Cell 2</TableCell>
        </TableRow>
      </tbody>
    </Table>
  )
};