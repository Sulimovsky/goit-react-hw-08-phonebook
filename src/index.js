import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';
import ToggleColorMode from 'components/ToggleColorMode/ToggleColorMode';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <React.StrictMode>
          <ToggleColorMode />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
