import { configureStore } from '@reduxjs/toolkit';
import storeSynchronize from 'redux-localstore';
import { songResultsSlice } from './slices/searchResults.slice';

export const store = configureStore({
  reducer: {
    searchResults: songResultsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

storeSynchronize(store, {
  blacklist: [],
});
