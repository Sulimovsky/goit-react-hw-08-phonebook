import { ClipLoader } from 'react-spinners';
import { useTheme } from '@mui/material/styles';

const PageLoader = () => {
  const theme = useTheme();
  const currentColor = theme.palette.mode === 'light' ? '#424242' : '#fafafa';

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ClipLoader color={currentColor} />
    </div>
  );
};

export default PageLoader;
