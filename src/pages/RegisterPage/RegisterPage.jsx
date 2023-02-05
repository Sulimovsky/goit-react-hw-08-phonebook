import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useAuth } from 'components/hooks/useAuth';
import { register } from 'redux/auth/operations';
import { validationFormPassword } from 'components/validationForms/validationForms';
import { Box, TextField, Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Section } from './RegisterPage.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validationPassword = validationFormPassword(password);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    dispatch(register(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.name}!`);
      })
      .catch(() => {
        toast.error(
          'The user with this email is already registered, try another email.'
        );
      });
    reset();
  };

  const reset = () => {
    setName('');
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
              label="Username"
              variant="outlined"
              color="secondary"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required={true}
              sx={{ width: '100%' }}
            />
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
              error={validationPassword}
              helperText={
                validationPassword &&
                'Enter a password longer than 7 characters'
              }
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
              endIcon={<ControlPointIcon />}
              loading={isLoading}
              color="secondary"
              type="submit"
              disabled={validationPassword}
              sx={{ width: '80%', color: 'common.white', fontWeight: '700' }}
            >
              <span>Sign Up</span>
            </LoadingButton>
          </Stack>
        </Box>
      </Section>
    </main>
  );
};

export default RegisterPage;
