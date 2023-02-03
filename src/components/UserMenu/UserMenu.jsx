import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { IconButton, MenuItem, Menu } from '@mui/material';
import { useAuth } from 'components/hooks/useAuth';
import { AccountCircle, LogOutBtn } from './UserMenu.styled';

const UserMenu = ({ onMenuUser, anchorElUser, onClose }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar-user"
        aria-haspopup="true"
        onClick={onMenuUser}
        color="inherit"
      >
        <AccountCircle>{user.name[0]}</AccountCircle>
      </IconButton>
      <Menu
        id="menu-appbar-user"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={onClose}
      >
        <MenuItem onClick={onClose}>
          <LogOutBtn onClick={handleLogOut}> Log Out </LogOutBtn>
        </MenuItem>
      </Menu>
    </div>
  );
};

UserMenu.propTypes = {
  onMenuUser: PropTypes.func,
  anchorElUser: PropTypes.object,
  onClose: PropTypes.func,
};

export default UserMenu;
