import styled from 'styled-components';

interface ITextInputStyle {
  error: boolean;
  focused: boolean;
}

export const Label = styled.label<ITextInputStyle>`
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  margin-bottom: 8px;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  color: ${({ focused, error }) => {
    if (focused) return 'var(--primary)';
    if (error) return 'var(--error)';
    return 'var(--main)';
  }};
`;

export const ErrorText = styled.div`
  font-size: 0.85rem;
  margin-top: 8px;
  color: var(--error);
`;
