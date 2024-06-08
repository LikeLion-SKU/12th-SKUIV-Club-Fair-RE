import { Link } from 'react-router-dom';
import * as S from './LinkButton.style';

export default function LinkButton({ img }) {
  return (
    <S.LinkButtonLayout>
      <Link to='/'><img src={img}/></Link>
    </S.LinkButtonLayout>
  );
}
