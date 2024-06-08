import React from 'react';
import * as S from './Home.style';

import ImageSection from './components/ImageSection';
import ButtonSection from './components/ButtonSection';
import LinkButtonSection from './components/LinkButtonSection';

export default function HomePage() {
  return (
    <>
      <S.HomePageLayout>
        <ImageSection />
        <ButtonSection />
        <LinkButtonSection />
      </S.HomePageLayout>
    </>
  );
}
