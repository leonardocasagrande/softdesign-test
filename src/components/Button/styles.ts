import styled from 'styled-components';
import { TColor } from 'types';

interface IContainerProps {
  color: TColor;
  variant: 'contained' | 'text' | 'outlined';
  rounded: boolean;
}

const Container = styled.button<IContainerProps>`
  color: ${({ color, variant }) =>
    `${variant === 'contained' ? 'var(--white)' : `var(--${color})`}`};
  padding: ${({ rounded }) => (rounded ? '8px' : '8px 16px')};
  border: 0;
  outline: 0;
  border-radius: ${({ rounded }) => (rounded ? '50%' : '4px')};
  font: inherit;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;
  transition: opacity 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    border-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  box-shadow: ${({ variant }) =>
    `${
      variant === 'contained'
        ? '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
        : 'unset'
    }`};
  background-color: ${({ variant, color }) =>
    `${variant === 'contained' ? `var(--${color})` : 'unset'}`};
  border: ${({ variant, color }) =>
    `${variant === 'outlined' ? `1px solid var(--${color})` : 'unset'}`};
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

export default Container;
