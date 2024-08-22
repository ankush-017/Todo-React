// emailSlice.js
import { createSlice } from '@reduxjs/toolkit';

const emailSlice = createSlice({
  name: 'email',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    sendEmailStart: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    sendEmailSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    sendEmailFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { sendEmailStart, sendEmailSuccess, sendEmailFailure } = emailSlice.actions;
export default emailSlice.reducer;