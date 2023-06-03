import { configureStore } from '@reduxjs/toolkit';
import storeSynchronize from 'redux-localstore';
import { songResultsSlice } from './slices/searchResults.slice';
import { currentVideoSlice } from './slices/currentVideoId.slice';
import { playerStateSlice } from './slices/playerState.slice';
import { userPlaylistSlice } from './slices/userPlaylist.slice';
import { userSimpleLoginSlice } from './slices/simpleLogin.slice';

export const store = configureStore({
  reducer: {
    searchResults: songResultsSlice.reducer,
    currentVideoId: currentVideoSlice.reducer,
    playerState: playerStateSlice.reducer,
    userPlaylist: userPlaylistSlice.reducer,
    simpleLogin: userSimpleLoginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

storeSynchronize(store, {
  blacklist: [],
});
