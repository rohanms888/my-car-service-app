import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import carReducer from './reducers/carReducer';
import bookingReducer from './reducers/bookingReducer';
import repairTypesReducer from './reducers/repairTypesReducer';

import App from './App';
import './index.css';

const rootReducer = {
  car: carReducer,
  booking: bookingReducer,
  repairTypes: repairTypesReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

const root = document.getElementById('root');

// Wrap your ReactDOM.render in a function to use createRoot
const renderApp = () => {
  const rootElement = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Use createRoot to render your application
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(rootElement);
};

// Call the renderApp function to render your application
renderApp();
