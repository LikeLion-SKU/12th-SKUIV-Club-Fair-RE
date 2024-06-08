import styled from 'styled-components';

export const LinkButtonSectionLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(5, minmax(20px, 130px));
  grid-template-rows: repeat(3, minmax(20px, 1fr));
  gap: 30px;
  justify-content: center;
  padding-bottom: 3%;
   @media ${({ theme }) => theme.device.mobile} {
    gap: 10px;
  }
`;
