// src/components/Label/Label.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    htmlFor: { control: 'text' },
    children: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Username',
    htmlFor: 'username'
  }
};

export const Required: Story = {
  args: {
    children: 'Password',
    htmlFor: 'password',
    required: true
  }
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Label',
    disabled: true
  }
};