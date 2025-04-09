// src/components/Card/Card.types.ts
export interface CardProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    image?: string;
    imageAlt?: string;
    disabled?: boolean;
    backgroundColor?: string;
    onClick?: () => void;
    width?: string;
    height?: string;
  }