// src/components/Dropdown/Dropdown.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select an option'
  }
};

export const WithValue: Story = {
  args: {
    options: sampleOptions,
    value: 'option2'
  }
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    disabled: true,
    placeholder: 'Disabled dropdown'
  }
};