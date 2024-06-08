import * as S from './Button.style';

export default function Button({ children, $column, $row }) {
  return (
    <>
      <S.ButtonLayout $column={$column} $row={$row}>
        <S.BunttonLink>{children}</S.BunttonLink>
      </S.ButtonLayout>
    </>
  );
}
