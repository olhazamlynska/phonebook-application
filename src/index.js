import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';
import { GlobalStyle } from 'components/GlobalStyle/GlobalStyle';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/phonebook-application">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
