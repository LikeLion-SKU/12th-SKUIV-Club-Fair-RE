import * as S from './ButtonSection.style';

import Button from './Button';
export default function ButtonSection() {
  return (
    <>
      <S.HomePageButtonSection>
        <Button
          $column={{ Pstart: 2, Pend: 4, Mstart: 1, Mend: 4 }}
          $row={{ start: 1, end: 3 }}
          path="booth"
        >
          <h3>부스소개</h3>
          <p>각 부스별 위치 확인</p>
        </Button>
        <Button
          $column={{ Pstart: 4, Pend: 6, Mstart: 4, Mend: 7 }}
          $row={{ start: 1, end: 3 }}
          path="performence"
        >
          <h3>운영시간</h3>
          <p>행사 일정 안내</p>
        </Button>
        <Button
          $column={{ Pstart: 2, Pend: 6, Mstart: 1, Mend: 7 }}
          $row={{ start: 3, end: 5 }}
        >
          <h3>유형테스트</h3>
          <p>나에게 꼭맞는 동아리를 찾아봐!</p>
        </Button>
        <Button
          $column={{ Pstart: 4, Pend: 6, Mstart: 4, Mend: 7 }}
          $row={{ start: 5, end: 6 }}
          path="about"
        >
          <h3>제작자</h3>
        </Button>
      </S.HomePageButtonSection>
    </>
  );
}
