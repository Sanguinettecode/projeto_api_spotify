import React from 'react';
import 'dotenv/config';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import history from './services/history';
import './config/ReactotronConfig';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyles />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
