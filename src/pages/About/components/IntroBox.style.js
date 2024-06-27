import styled from "styled-components";

export const IntroBoxLayout = styled.div`
  width: 480px;
  height: 70px;
  background-color: rgba(243, 226, 219, 0.7);
  border-radius: 5px;
  margin: 30px auto;
  @media ${({ theme }) => theme.device.pc} {
    width: 500px;
    margin: 30px auto;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 300px;
    margin: 15px auto;
  }
  .intro {
    padding-top: 10px;
    padding-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
  align-items: center;
  .name {
    padding-left: 10px;
    font-weight: 800;
  }
`;

export const ImageBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 70%;
  overflow: hidden;
  & img {
    width: 100%;
    object-fit: cover;
  }
`;

export const MajorBox = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  @media ${({ theme }) => theme.device.mobile} {
    .major {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;
