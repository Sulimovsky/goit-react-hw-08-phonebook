import { useContext } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from 'components/ToggleColorMode/ToggleColorMode';

const BtnMode = ({ sx }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton onClick={colorMode.toggleColorMode} sx={sx}>
      {theme.palette.mode === 'light' ? (
        <LightModeIcon sx={{ color: 'text.primary' }} />
      ) : (
        <DarkModeIcon />
      )}
    </IconButton>
  );
};

BtnMode.propTypes = {
  sx: PropTypes.object,
};

export default BtnMode;
