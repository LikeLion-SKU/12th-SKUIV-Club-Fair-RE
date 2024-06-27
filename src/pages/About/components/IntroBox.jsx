import * as S from "./IntroBox.style";
import logo from "../../../assets/images/HomePage/logo.png";

export default function IntroBox() {
  return (
    <S.IntroBoxLayout>
      <S.ProfileBox>
        <S.ImageBox>
          <img src={logo} />
        </S.ImageBox>
        <p className="name">홍길동</p>
        <S.MajorBox>
          <p className="major">컴퓨터공학과 22</p>
        </S.MajorBox>
      </S.ProfileBox>
      <p className="intro">참 인생살기 쉽지 않다 그죠?</p>
    </S.IntroBoxLayout>
  );
}
