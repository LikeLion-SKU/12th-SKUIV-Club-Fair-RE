import styled from "styled-components";

const ImageBox = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 70%;
  overflow: hidden;
  & img {
    width: 100%;
    object-fit: cover;
  }
`;

const InformationLayout = styled.div`
  width: 400px;
  margin: auto;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px #50a65d dashed;
  @media ${({ theme }) => theme.device.pc} {
    width: 500px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 300px;
  }
`;

export default function Information({ time, img, performance }) {
  return (
    <InformationLayout>
      <ImageBox>
        <img src={img} alt="clublogo" />
      </ImageBox>
      <p>{time}</p>
      <p>{performance}</p>
    </InformationLayout>
  );
}
