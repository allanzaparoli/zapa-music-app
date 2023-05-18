import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const emptyArray = [];
const searchResultsState = defineState(emptyArray)('searchResults');

export const songResultsSlice = createSlice({
  name: 'searchResults',
  initialState: searchResultsState,
  reducers: {
    setSearchResults: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setSearchResults } = songResultsSlice.actions;
