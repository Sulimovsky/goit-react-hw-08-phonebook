import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PageLoader from 'components/Loaders/PageLoader/PageLoader';
import Navigation from 'components/Navigation/Navigation';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
