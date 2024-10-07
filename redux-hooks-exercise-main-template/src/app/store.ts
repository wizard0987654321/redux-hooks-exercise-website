import { configureStore } from '@reduxjs/toolkit'
import { firstSlice } from '../firstSlice';

export const store = configureStore({
    reducer: {
      first: firstSlice.reducer,
    },
  });

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>