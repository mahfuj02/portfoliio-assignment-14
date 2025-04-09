// src/components/RadioButton/RadioButton.types.ts
export interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  backgroundColor?: string;
}