import styled from 'styled-components';

type TContainerProps = {
  open: boolean;
};

export const Container = styled.div<TContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? 1 : 0)};
`;
