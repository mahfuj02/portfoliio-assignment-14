// src/components/Table/Table.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';

describe('Table Components', () => {
  it('renders table and is visible', () => {
    render(
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Header</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>Content</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('has correct styles when disabled', () => {
    render(
      <Table disabled>
        <tbody>
          <TableRow disabled>
            <TableCell disabled>Disabled Content</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    const cell = screen.getByText('Disabled Content');
    expect(cell).toHaveStyle({
      cursor: 'not-allowed'
    });
  });
});