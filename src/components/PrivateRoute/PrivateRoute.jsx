import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

PrivateRoute.propTypes = {
  component: PropTypes.object,
  redirectTo: PropTypes.string.isRequired,
};

export default PrivateRoute;
