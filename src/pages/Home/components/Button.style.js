import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonLayout = styled.button`
  background-color: #fdf0ee;
  border-radius: 7px;
  grid-column: ${({ $column }) => $column.Pstart + '/' + $column.Pend};
  grid-row: ${({ $row }) => $row.start + '/' + $row.end};
  @media ${({ theme }) => theme.device.mobile} {
    grid-column: ${({ $column }) => $column.Mstart + '/' + $column.Mend};
    grid-row: ${({ $row }) => $row.start + '/' + $row.end};
  }
`;

export const BunttonLink = styled(Link)`
  text-decoration: none;
  color: black;

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: left;
    padding-left: 10px;
  }
  & p {
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: left;
    padding-left: 10px;
  }

  & div {
    display: inline-block;
    width: 50px;
    height: 50px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    & h3 {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
    & p {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;
