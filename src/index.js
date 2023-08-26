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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
