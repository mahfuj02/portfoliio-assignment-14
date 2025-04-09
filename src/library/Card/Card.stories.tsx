// src/components/Card/Card.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    children: 'This is the card content',
    width: '300px'
  }
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    subtitle: 'Featured image card',
    image: 'https://via.placeholder.com/300x200',
    imageAlt: 'Card featured image',
    children: 'Card content with image',
    width: '300px'
  }
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    subtitle: 'This card is disabled',
    children: 'Disabled card content',
    disabled: true,
    width: '300px'
  }
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    subtitle: 'Click me!',
    children: 'This card is clickable',
    onClick: () => alert('Card clicked!'),
    width: '300px'
  }
};