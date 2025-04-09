// src/components/Table/Table.tsx
import styled from 'styled-components';
import { 
  TableProps, 
  TableHeaderProps, 
  TableRowProps, 
  TableCellProps, 
  TableFooterProps 
} from './Table.types';

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${props => props.disabled ? '#f5f5f5' : props.backgroundColor || 'white'};
  opacity: ${props => props.disabled ? 0.7 : 1};
  border: 1px solid #ddd;
`;

const StyledTableHeader = styled.th<TableHeaderProps>`
  padding: 12px;
  background-color: ${props => props.disabled ? '#e0e0e0' : props.backgroundColor || '#f8f9fa'};
  border: 1px solid #ddd;
  font-weight: bold;
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
`;

const StyledTableRow = styled.tr<TableRowProps>`
  &:nth-child(even) {
    background-color: ${props => props.disabled ? '#f5f5f5' : props.backgroundColor || '#f8f9fa'};
  }
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
`;

const StyledTableCell = styled.td<TableCellProps>`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: ${props => props.align || 'left'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
  background-color: ${props => props.backgroundColor};
`;

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${props => props.disabled ? '#e0e0e0' : props.backgroundColor || '#f8f9fa'};
  font-weight: bold;
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
`;

export const Table = ({ children, disabled, backgroundColor }: TableProps) => (
  <StyledTable disabled={disabled} backgroundColor={backgroundColor}>
    {children}
  </StyledTable>
);

export const TableHeader = ({ children, disabled, backgroundColor }: TableHeaderProps) => (
  <StyledTableHeader disabled={disabled} backgroundColor={backgroundColor}>
    {children}
  </StyledTableHeader>
);

export const TableRow = ({ children, disabled, backgroundColor }: TableRowProps) => (
  <StyledTableRow disabled={disabled} backgroundColor={backgroundColor}>
    {children}
  </StyledTableRow>
);

export const TableCell = ({ children, disabled, backgroundColor, align }: TableCellProps) => (
  <StyledTableCell 
    disabled={disabled} 
    backgroundColor={backgroundColor}
    align={align}
  >
    {children}
  </StyledTableCell>
);

export const TableFooter = ({ children, disabled, backgroundColor }: TableFooterProps) => (
  <StyledTableFooter disabled={disabled} backgroundColor={backgroundColor}>
    {children}
  </StyledTableFooter>
);