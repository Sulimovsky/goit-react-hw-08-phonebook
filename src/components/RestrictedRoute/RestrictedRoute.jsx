import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

RestrictedRoute.propTypes = {
  component: PropTypes.object,
  redirectTo: PropTypes.string.isRequired,
};

export default RestrictedRoute;
