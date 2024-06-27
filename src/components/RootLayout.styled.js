import styled from "styled-components";
import background from "../assets/images/HomePage/background.png";

export const RootLayout = styled.main`
  @media ${({ theme }) => theme.device.pc} {
    width: 1300px;
    margin: auto;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0px 16px;
  }
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px 32px;
`;
