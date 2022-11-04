import { createSlice } from '@reduxjs/toolkit';
import { IState } from 'interfaces/store';

const initialState: IState = {
  status: '',
  formData: {
    city: '',
    password: '',
    passwordRepeat: '',
    email: '',
    checkbox: false,
  },
};

export const appSlice = createSlice({
  name: 'appData',
  initialState: initialState,
  reducers: {
    statusReducer(state, action) {
      state.status = action.payload.status;
    },
    cityReducer(state, action) {
      state.formData.city = action.payload.city;
    },
    passwordReducer(state, action) {
      state.formData.password = action.payload.password;
    },
    passwordRepeatReducer(state, action) {
      state.formData.passwordRepeat = action.payload.passwordRepeat;
    },
    emailReducer(state, action) {
      state.formData.email = action.payload.email;
    },
    checkboxReducer(state, action) {
      state.formData.checkbox = action.payload.checkbox;
    },
  },
});

export const {
  statusReducer,
  cityReducer,
  passwordReducer,
  passwordRepeatReducer,
  emailReducer,
  checkboxReducer,
} = appSlice.actions;

export default appSlice.reducer;
