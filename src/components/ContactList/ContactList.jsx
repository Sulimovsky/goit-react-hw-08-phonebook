import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/contacts/operations';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Grid,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { LinkNumber } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = id =>
    dispatch(deleteContact(id))
      .unwrap()
      .then(res => res)
      .catch(() => toast.error("Error! Contact wasn't delete."));

  return (
    <>
      <Grid item xs={12} md={6}>
        <List>
          {contacts.map(({ id, name, number }) => (
            <ListItem
              key={id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AccountBoxIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={name}
                secondary={
                  <LinkNumber href={`tel:${number}`}>{number}</LinkNumber>
                }
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
