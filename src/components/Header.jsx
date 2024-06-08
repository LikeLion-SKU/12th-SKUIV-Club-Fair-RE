import { NavLink } from 'react-router-dom';
import * as S from './Header.style';

export default function Header() {
  return (
    <S.HeaderLayout>
      <S.HeaderNavLink to="/">Home</S.HeaderNavLink>
      <S.HeaderNavLink to="booth">부스소개</S.HeaderNavLink>
      <S.HeaderNavLink to="performence">공연정보</S.HeaderNavLink>
      <S.HeaderNavLink to="about">제작자</S.HeaderNavLink>
    </S.HeaderLayout>
  );
}
