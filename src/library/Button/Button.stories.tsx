import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Click me',
    backgroundColor: '#007bff',
    size: 'medium',
  },
};
export const Secondary: Story = {
  args: {
    children: 'Click me',
    backgroundColor: '#6a3bce',
    size: 'medium',
  },
};
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    size: 'medium',
  },
};
