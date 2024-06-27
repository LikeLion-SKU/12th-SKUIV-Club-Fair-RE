import * as S from './Button.style';

export default function Button({ children, $column, $row, path }) {
  return (
    <>
      <S.ButtonLayout $column={$column} $row={$row}>
        <S.BunttonLink to={path}>{children}</S.BunttonLink>
      </S.ButtonLayout>
    </>
  );
}
