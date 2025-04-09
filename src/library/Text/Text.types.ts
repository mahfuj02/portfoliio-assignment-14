// src/components/Text/Text.types.ts
export interface TextProps {
    children: React.ReactNode;
    variant?: 'body' | 'heading' | 'caption';
    disabled?: boolean;
    color?: string;
    size?: 'small' | 'medium' | 'large';
  }