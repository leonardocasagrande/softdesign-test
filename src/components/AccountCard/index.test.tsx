import { render, screen } from 'config/test-utils';
import userEvent from '@testing-library/user-event';
import AccountCard from '.';

test('appear login initially', () => {
  render(<AccountCard />);
  expect(screen.queryByRole('heading')).toHaveTextContent('Entrar');
});

test('appear create account after clicking', () => {
  render(<AccountCard />);
  const button = screen.getByRole('button', {
    name: /Criar conta/i,
  });
  userEvent.click(button);
  expect(screen.queryByRole('heading')).toHaveTextContent('Criar conta');
});
