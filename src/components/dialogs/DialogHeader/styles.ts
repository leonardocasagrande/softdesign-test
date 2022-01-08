import styled from 'styled-components';
import { TColor } from 'types';

type TIconProps = {
  color: TColor;
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.span<TIconProps>`
  color: ${({ color }) => `var(--${color})`};
`;
