import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { useAuth } from 'components/hooks/useAuth';
import { Box, TextField, Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Section } from './LogInPage.styled';

const LogInPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(login(data));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <main>
      <Section>
        <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
          <Stack spacing={2} alignItems="center" justifyContent="center">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              color="secondary"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required={true}
              sx={{ width: '100%' }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              color="secondary"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required={true}
              sx={{ width: '100%' }}
            />
            <LoadingButton
              loadingPosition="end"
              variant="contained"
              endIcon={<AccountCircleIcon />}
              loading={isLoading}
              color="secondary"
              type="submit"
              sx={{ width: '80%', color: 'common.white', fontWeight: '700' }}
            >
              <span>Sign In</span>
            </LoadingButton>
          </Stack>
        </Box>
      </Section>
    </main>
  );
};

export default LogInPage;
