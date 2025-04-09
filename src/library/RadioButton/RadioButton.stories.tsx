// src/components/RadioButton/RadioButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Radio Option',
    name: 'radioGroup',
    value: 'option1'
  }
};

export const Checked: Story = {
  args: {
    label: 'Selected Option',
    name: 'radioGroup',
    value: 'option1',
    checked: true
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Option',
    name: 'radioGroup',
    value: 'option1',
    disabled: true
  }
};