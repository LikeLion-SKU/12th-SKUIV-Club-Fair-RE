import styled from "styled-components";

export const PerformanceLayout = styled.div`
  height: 100vh;
`;

export const InformationBox = styled.div`
  width: 500px;
  border-radius: 10px;
  background-color: rgba(255, 245, 245, 0.7);
  padding: 20px 0;
  margin: auto;
  @media ${({ theme }) => theme.device.pc} {
    width: 600px;
    margin: auto;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 300px;
    width: 100%;
  }
`;

export const ImageBox = styled.div`
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
`;
