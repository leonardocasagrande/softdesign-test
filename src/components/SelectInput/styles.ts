import styled from 'styled-components';

interface ISelectInputStyle {
  error: boolean;
  focused: boolean;
}

export const Select = styled.select<ISelectInputStyle>`
  border-radius: 4px;
  border-color: ${({ focused, error }) => {
    if (focused) return 'var(--primary)';
    if (error) return 'var(--error)';
    return 'var(--textLight)';
  }};
  padding: 8px 16px;
  border-width: 1px;
  border-style: solid;
  background-color: white;
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
