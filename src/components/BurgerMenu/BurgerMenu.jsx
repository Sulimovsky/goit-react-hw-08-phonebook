import PropTypes from 'prop-types';
import { IconButton, MenuItem, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { LinkShared } from './BurgerMenu.styled';

const BurgerMenu = ({ onMenuNav, anchorElNav, onClose, isLoggedIn }) => {
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="text.primary"
        aria-label="menu"
        aria-controls="menu-appbar-nav"
        aria-haspopup="true"
        onClick={onMenuNav}
        sx={{ mr: 1 }}
      >
        <MenuIcon fontSize="large" sx={{ color: 'text.primary' }} />
      </IconButton>
      <Menu
        id="menu-appbar-nav"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElNav)}
        onClose={onClose}
      >
        <MenuItem onClick={onClose}>
          <LinkShared to="/">Home</LinkShared>
        </MenuItem>
        {isLoggedIn ? (
          <MenuItem onClick={onClose}>
            <LinkShared to="/contacts">Contacts</LinkShared>
          </MenuItem>
        ) : (
          <MenuItem onClick={onClose}>
            <LinkShared to="/register">Sign Up</LinkShared>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

BurgerMenu.propTypes = {
  onMenuNav: PropTypes.func,
  anchorElNav: PropTypes.object,
  onClose: PropTypes.func,
};

export default BurgerMenu;
