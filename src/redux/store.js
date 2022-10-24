import { configureStore } from "@reduxjs/toolkit";

import { filterSlice } from './filterSlice';
import { contactApi } from './contactsSliceApi';

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
      [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(contactApi.middleware),
    [...getDefaultMiddleware(), contactApi.middleware,],
});









