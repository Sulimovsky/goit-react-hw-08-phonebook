import { useState } from 'react';
import PropTypes from 'prop-types';
import { useContacts } from 'components/hooks/useContacts';
import {
  validationContactsFormName,
  validationContactsFormNumber,
} from 'components/validationForms/validationForms';
import { Box, TextField, Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const ContactForm = ({ onAddContact }) => {
  const { isLoadingBtn } = useContacts();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const validationName = validationContactsFormName(name);
  const validationNumber = validationContactsFormNumber(number);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      number,
    };
    onAddContact(data);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
        <Stack spacing={2} alignItems="center" justifyContent="center">
          <TextField
            id="outlined-basic"
            error={validationName}
            helperText={
              validationName &&
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            }
            label="Name"
            variant="outlined"
            color="secondary"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required={true}
            sx={{ width: '100%' }}
          />
          <TextField
            error={validationNumber}
            helperText={
              validationNumber &&
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            }
            id="outlined-basic"
            label="Number"
            variant="outlined"
            color="secondary"
            type="tel"
            value={number}
            onChange={e => setNumber(e.target.value)}
            required={true}
            sx={{ width: '100%' }}
          />

          <LoadingButton
            loadingPosition="end"
            variant="contained"
            endIcon={<ControlPointIcon />}
            loading={isLoadingBtn}
            color="secondary"
            type="submit"
            sx={{ width: '80%', color: 'common.white', fontWeight: '700' }}
            disabled={validationName || validationNumber}
          >
            <span>Add Contact</span>
          </LoadingButton>
        </Stack>
      </Box>
    </>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
