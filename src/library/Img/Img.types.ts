// src/components/Img/Img.types.ts
export interface ImgProps {
    src: string;
    alt: string;
    disabled?: boolean;
    width?: string | number;
    height?: string | number;
    objectFit?: 'cover' | 'contain' | 'fill';
    rounded?: boolean;
    backgroundColor?: string;
  }