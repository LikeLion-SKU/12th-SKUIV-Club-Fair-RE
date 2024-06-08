import * as S from './LinkButtonSection.styled';
import logo from '../../../assets/images/HomePage/logo.png';
import LinkButton from './LinkButton';

export default function LinkButtonSection() {
  return (
    <S.LinkButtonSectionLayout>
      {
        DUMMY.map((prod) => {
          return (
            <LinkButton key={prod.id} img={prod.img}/>
          );
        })
      }  
    </S.LinkButtonSectionLayout>
  );
}

const DUMMY = [
  {
    id: 1,
    img: logo
  },
  {
    id: 2,
    img: logo
  },
  {
    id: 3,
    img: logo
  },
  {
    id: 4,
    img: logo
  },
  {
    id: 5,
    img: logo
  },

  {
    id: 6,
    img: logo
  },
  {
    id: 7,
    img: logo
  },
  {
    id: 8,
    img: logo
  },
  {
    id: 9,
    img: logo
  },
  {
    id: 10,
    img: logo
  },
  {
    id: 11,
    img: logo
  },
  {
    id: 12,
    img: logo
  },
  {
    id: 13,
    img: logo
  },
  {
    id: 14,
    img: logo
  },
  {
    id: 15,
    img: logo
  },
]