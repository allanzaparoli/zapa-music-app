import { configureStore } from '@reduxjs/toolkit';
import storeSynchronize from 'redux-localstore';

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

storeSynchronize(store, {
  blacklist: [],
});
