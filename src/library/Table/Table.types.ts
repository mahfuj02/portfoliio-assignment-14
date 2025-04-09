// src/components/Table/Table.types.ts
export interface TableProps {
    children: React.ReactNode;
    disabled?: boolean;
    backgroundColor?: string;
  }
  
  export interface TableHeaderProps {
    children: React.ReactNode;
    disabled?: boolean;
    backgroundColor?: string;
  }
  
  export interface TableRowProps {
    children: React.ReactNode;
    disabled?: boolean;
    backgroundColor?: string;
  }
  
  export interface TableCellProps {
    children: React.ReactNode;
    disabled?: boolean;
    backgroundColor?: string;
    align?: 'left' | 'center' | 'right';
  }
  
  export interface TableFooterProps {
    children: React.ReactNode;
    disabled?: boolean;
    backgroundColor?: string;
  }