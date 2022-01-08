import styled from 'styled-components';

interface ITextInputStyle {
  error: boolean;
  focused: boolean;
}

export const Input = styled.input<ITextInputStyle>`
  border-radius: 4px;
  border-color: ${({ focused, error }) => {
    if (focused) return 'var(--primary)';
    if (error) return 'var(--error)';
    return 'var(--textLight)';
  }};
  padding: 8px 16px;
  border-width: 1px;
  border-style: solid;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    border-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  width: 100%;
  box-sizing: border-box;
  color: ${({ focused, error }) => {
    if (focused) return 'var(--textMain)';
    if (error) return 'var(--error)';
    return 'var(--textMain)';
  }};
`;
