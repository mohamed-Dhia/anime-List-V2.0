import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Index from './components';

const App = () => (
  <Provider store={store}>
    <Index />
  </Provider>
);

export default App;
