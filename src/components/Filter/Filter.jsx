import PropTypes from 'prop-types';
import { TextField, Stack } from '@mui/material';

const Filter = ({ onFilter }) => {
  return (
    <Stack alignItems="center">
      <TextField
        id="outlined-basic"
        label="Find contact by name..."
        variant="outlined"
        color="secondary"
        type="text"
        autoComplete="off"
        onChange={e => onFilter(e.target.value)}
        sx={{ width: '80%' }}
      />
    </Stack>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
