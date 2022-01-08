import { render, screen } from 'config/test-utils';
import Pagination from '.';

const pageOptions = [2, 3, 5, 10];

test('display current values correctly first page', () => {
  render(
    <Pagination
      count={10}
      page={0}
      onPageChange={() => undefined}
      onRowsPerPageChange={() => undefined}
      rowsPerPage={3}
      pageOptions={pageOptions}
    />
  );
  expect(screen.getByText('1 - 3 de 10')).toBeTruthy();
});

test('display current values correctly second page', () => {
  render(
    <Pagination
      count={10}
      page={1}
      onPageChange={() => undefined}
      onRowsPerPageChange={() => undefined}
      rowsPerPage={3}
      pageOptions={pageOptions}
    />
  );
  expect(screen.getByText('4 - 6 de 10')).toBeTruthy();
});

test('display current values correctly last page', () => {
  render(
    <Pagination
      count={10}
      page={3}
      onPageChange={() => undefined}
      onRowsPerPageChange={() => undefined}
      rowsPerPage={3}
      pageOptions={pageOptions}
    />
  );
  expect(screen.getByText('10 - 10 de 10')).toBeTruthy();
});
