import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

export default function RootLayout() {
  const location = useLocation();

  function headerHandler() {
    if (location.pathname === '/') {
      return;
    } else {
      return <Header />;
    }
  }
  return (
    <>
      {headerHandler()}
      <Outlet />
    </>
  );
}
