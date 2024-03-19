// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers'; // Import the reducer

const store = configureStore({
  reducer: reducer, // Pass the reducer to configureStore
});

export default store;
