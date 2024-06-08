import styled from 'styled-components';

export const HomePageButtonSection = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 20px;
  margin-top: 10%;
  margin-bottom: 10%;
  height: 400px;
  @media ${({ theme }) => theme.device.mobile} {
    gap: 10px;
  }
`;
