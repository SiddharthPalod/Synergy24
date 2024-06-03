// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  visibility: {}
};

const visibilitySlice = createSlice({
  name: 'visibility',
  initialState,
  reducers: {
    showComponent: (state, action) => {
      state.visibility[action.payload] = true;
    },
    hideComponent: (state, action) => {
      state.visibility[action.payload] = false;
    }
  }
});

export const { showComponent, hideComponent } = visibilitySlice.actions;

const store = configureStore({
  reducer: {
    visibility: visibilitySlice.reducer
  }
});

export default store;
