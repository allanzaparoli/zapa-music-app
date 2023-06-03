import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const emptyArray = [];
const userPlaylist = defineState(emptyArray)('userPlaylist');

export const userPlaylistSlice = createSlice({
  name: 'userPlaylist',
  initialState: userPlaylist,
  reducers: {
    setUserPlaylist: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setUserPlaylist, logoutPlaylist } = userPlaylistSlice.actions;
