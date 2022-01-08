import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 10px;
  width: 100%;
`;

export const Td = styled.td`
  border: solid 1px var(--textLight);
  border-style: solid none;
  padding: 10px 20px;
  background-color: white;
  &:first-child {
    border-left-style: solid;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:last-child {
    border-right-style: solid;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 0 20px;
`;

export const Tr = styled.tr`
  background-color: var(--white);
`;
