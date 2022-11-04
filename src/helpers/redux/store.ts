import { configureStore } from '@reduxjs/toolkit';
import appDataReducer from './appSlice';
export default configureStore({
  reducer: {
    appData: appDataReducer,
  },
});
