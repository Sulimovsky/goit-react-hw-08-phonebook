import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectIsLoadingBtn,
  selectError,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isLoadingBtn = useSelector(selectIsLoadingBtn);
  const error = useSelector(selectError);

  return {
    contacts,
    isLoading,
    isLoadingBtn,
    error,
  };
};
