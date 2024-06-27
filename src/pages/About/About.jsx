import IntroBox from "./components/IntroBox";
import collabologo from "../../assets/images/About/collabo.svg";
import * as S from "./About.style";

export default function AboutPage() {
  return (
    <S.AboutLayout>
      <S.ImgBox>
        <img src={collabologo} />
      </S.ImgBox>
      <S.CotentSection>
        <h1>총동연회장</h1>
        <IntroBox />
      </S.CotentSection>
      <S.CotentSection>
        <h1>DESIGNER</h1>
        <IntroBox />
      </S.CotentSection>
      <S.CotentSection>
        <h1>DEVELOPER</h1>
        <IntroBox />
        <IntroBox />
        <IntroBox />
      </S.CotentSection>
    </S.AboutLayout>
  );
}
