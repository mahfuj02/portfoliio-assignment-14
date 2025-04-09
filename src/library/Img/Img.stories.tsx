// src/components/Img/Img.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    rounded: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
    objectFit: {
      control: 'select',
      options: ['cover', 'contain', 'fill']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Placeholder image',
    width: 300,
    height: 200
  }
};

export const Rounded: Story = {
  args: {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Rounded image',
    width: 300,
    height: 200,
    rounded: true
  }
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Disabled image',
    width: 300,
    height: 200,
    disabled: true
  }
};