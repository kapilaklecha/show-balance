import { configureStore } from '@reduxjs/toolkit';
import partyReducer from './features/partySlice';
import partyBalanceReducer from './features/partyBalanceSlice';

const store = configureStore({
  reducer: {
    party: partyReducer,
    partyBalance: partyBalanceReducer,
  },
});

export default store;
