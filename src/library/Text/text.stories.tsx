// src/components/Text/Text.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: 'select',
      options: ['body', 'heading', 'caption']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
    children: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Body: Story = {
  args: {
    children: 'This is a body text example',
    variant: 'body'
  }
};

export const Heading: Story = {
  args: {
    children: 'This is a heading',
    variant: 'heading'
  }
};

export const Caption: Story = {
  args: {
    children: 'This is a caption text',
    variant: 'caption'
  }
};

export const Disabled: Story = {
  args: {
    children: 'This text is disabled',
    disabled: true
  }
};