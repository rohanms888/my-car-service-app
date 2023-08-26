import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './reducers/bookingReducer';
import carReducer from './reducers/carReducer';
import repairTypesReducer from './reducers/repairTypesReducer';

const store = configureStore({
  reducer: {
    booking: bookingReducer,
    car: carReducer,
    repairTypes: repairTypesReducer,
    
  },
  
});

export default store;

