import styled from 'styled-components';

export const LinkButtonLayout = styled.div`
  text-align: center;
  & img {
    display: inline-block;
      width: 130px;
      height: 130px;
  }
   @media ${({ theme }) => theme.device.mobile} {
    & img{
      display: inline-block;
      width: 60px;
      height: 60px;
    }
  }
`;