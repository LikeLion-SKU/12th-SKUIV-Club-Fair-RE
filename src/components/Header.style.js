import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderLayout = styled.header`
  width: 100%;
  height: 10vh;
  padding: 2% 0% 1% 0%;
  display: flex;
  justify-content: space-evenly;

  @media ${({ theme }) => theme.device.mobile} {
    height: 5vh;
    padding: 20px 5px;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    text-decoration-line: underline;
  }
`;
