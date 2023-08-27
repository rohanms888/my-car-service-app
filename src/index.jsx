import React from 'react';
import { createRoot } from 'react-dom/client';
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

// Use createRoot to render your application
const reactRoot = createRoot(root);
reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
