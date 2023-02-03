import { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'components/hooks/useAuth';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import PageLoader from 'components/Loaders/PageLoader/PageLoader';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
const Home = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LogInPage = lazy(() => import('pages/LogInPage/LogInPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

const App = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        {isRefreshing ? (
          <PageLoader />
        ) : (
          <Container maxWidth="sm">
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route
                  path="register"
                  element={
                    <RestrictedRoute
                      component={RegisterPage}
                      redirectTo="/contacts"
                    />
                  }
                />
                <Route
                  path="login"
                  element={
                    <RestrictedRoute
                      component={LogInPage}
                      redirectTo="/contacts"
                    />
                  }
                />
                <Route
                  path="contacts"
                  element={
                    <PrivateRoute
                      component={ContactsPage}
                      redirectTo="/login"
                    />
                  }
                />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Container>
        )}
      </ThemeProvider>
      <ToastContainer
        theme={theme.palette.mode === 'light' ? 'light' : 'dark'}
      />
    </>
  );
};

export default App;
