// src/components/Dropdown/Dropdown.types.ts
export interface DropdownOption {
    value: string;
    label: string;
  }
  
  export interface DropdownProps {
    options: DropdownOption[];
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
    backgroundColor?: string;
  }