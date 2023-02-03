import { ClipLoader } from 'react-spinners';
import { useTheme } from '@mui/material/styles';

const BasicLoader = () => {
  const theme = useTheme();
  const currentColor = theme.palette.mode === 'light' ? '#424242' : '#fafafa';

  return (
    <div style={{ textAlign: 'center' }}>
      <ClipLoader color={currentColor} />
    </div>
  );
};

export default BasicLoader;
