import styled from 'styled-components';

export const HomePageImageSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePageImageBox = styled.div`
  display: flex;
  width: ${({ $width }) => $width.pc + '%'};
  justify-content: center;
  margin-top: 15%;
  padding-top: 5%;
  & img {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: ${({ $width }) => $width.mobile + '%'};
  }
`;
