// src/components/HeroImage/HeroImage.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    backgroundColor: { control: 'color' },
    overlayColor: { control: 'color' },
    textColor: { control: 'color' },
    disabled: { control: 'boolean' },
    height: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero banner',
    title: 'Welcome to Our Site',
    subtitle: 'Discover amazing things with us'
  }
};

export const WithoutText: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero banner without text'
  }
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Disabled hero banner',
    title: 'Disabled Hero',
    subtitle: 'This hero section is disabled',
    disabled: true
  }
};

export const CustomColors: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Custom colored hero',
    title: 'Custom Colors',
    subtitle: 'With custom overlay and text colors',
    overlayColor: 'rgba(0, 100, 200, 0.5)',
    textColor: '#FFD700'
  }
};