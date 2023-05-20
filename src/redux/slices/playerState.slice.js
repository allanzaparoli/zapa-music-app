import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const INITIAL_STATE = {
  pip: false,
  playing: false,
  controls: false,
  light: false,
  volume: 0.8,
  muted: false,
  played: 0,
  loaded: 0,
  duration: 0,
  playbackRate: 1.0,
  loop: false,
  isPlayerOpen: false,
};

const playerState = defineState(INITIAL_STATE)('playerState');

export const playerStateSlice = createSlice({
  name: 'playerState',
  initialState: playerState,
  reducers: {
    setPlayerState: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setPlayerState } = playerStateSlice.actions;
