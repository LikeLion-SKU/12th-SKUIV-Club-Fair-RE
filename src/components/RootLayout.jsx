import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import * as S from "./RootLayout.styled";

export default function RootLayout() {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <S.RootLayout>
        <Outlet />
      </S.RootLayout>
    );
  }
  return (
    <S.RootLayout>
      <Header />
      <Outlet />
    </S.RootLayout>
  );
}
