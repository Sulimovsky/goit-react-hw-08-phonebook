import { useState } from 'react';
import { useAuth } from 'components/hooks/useAuth';
import { AppBar, Toolbar } from '@mui/material';
import BtnMode from 'components/BtnMode/BtnMode';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleMenuNav = e => {
    setAnchorElNav(e.currentTarget);
  };

  const handleMenuUser = e => {
    setAnchorElUser(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorElNav(null);
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ padding: '5px 0', backgroundColor: 'primary.main' }}>
      <Toolbar component="nav">
        <BurgerMenu
          onMenuNav={handleMenuNav}
          anchorElNav={anchorElNav}
          onClose={handleClose}
          isLoggedIn={isLoggedIn}
        />
        <BtnMode sx={{ mr: 'auto' }} />
        {isLoggedIn ? (
          <UserMenu
            onMenuUser={handleMenuUser}
            anchorElUser={anchorElUser}
            onClose={handleClose}
          />
        ) : (
          <div>
            <AuthNav />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
