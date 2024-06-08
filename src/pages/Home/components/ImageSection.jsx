import * as S from './ImageSection.style';

// images
import scroll from '../../../assets/images/HomePage/scroll.svg';
import DATE from '../../../assets/images/HomePage/DATE.svg';
import title from '../../../assets//images/HomePage/title_modified.svg';

export default function ImageSection() {
  return (
    <>
      <S.HomePageImageSection>
        <S.HomePageImageBox $width={{ pc: 50, mobile: 70 }}>
          <img src={title} />
        </S.HomePageImageBox>

        <S.HomePageImageBox $width={{ pc: 50, mobile: 70 }}>
          <img src={DATE} />
        </S.HomePageImageBox>

        <S.HomePageImageBox $width={{ pc: 20, mobile: 40 }}>
          <img src={scroll} />
        </S.HomePageImageBox>
      </S.HomePageImageSection>
    </>
  );
}
