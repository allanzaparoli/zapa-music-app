import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const emptyArray = [];
const currentVideoState = defineState(emptyArray)('currentVideoId');

export const currentVideoSlice = createSlice({
  name: 'currentVideoId',
  initialState: currentVideoState,
  reducers: {
    setCurrentVideoId: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setCurrentVideoId } = currentVideoSlice.actions;
