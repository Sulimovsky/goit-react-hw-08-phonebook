import { useMemo, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMode } from 'redux/mode/selectors';
import { changeMode } from 'redux/mode/modeSlice';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyles } from 'styles/GlobalStyle';
import { getDesignTokens } from 'styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import App from 'components/App/App';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ToggleColorMode = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const currentMode = mode === 'dark' ? 'light' : 'dark';
        dispatch(changeMode(currentMode));
      },
    }),
    [dispatch, mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
