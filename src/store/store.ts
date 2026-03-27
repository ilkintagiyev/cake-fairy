import { configureStore } from '@reduxjs/toolkit';
import { shopSlice } from './product';


export const store = configureStore({
  reducer: {
   [shopSlice.name] : shopSlice.reducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;