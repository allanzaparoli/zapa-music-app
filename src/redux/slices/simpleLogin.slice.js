import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const initialObject = { id: null, email: null, isLogged: false };
const initialState = defineState(initialObject)('simpleLogin');

export const userSimpleLoginSlice = createSlice({
  name: 'simpleLogin',
  initialState,
  reducers: {
    setSimpleLogin: (state, { payload }) => {
      state = payload;
      return state;
    },
    logoutUser: (state) => {
      state = initialObject;
      return state;
    },
  },
});

export const { setSimpleLogin, logoutUser } = userSimpleLoginSlice.actions;
