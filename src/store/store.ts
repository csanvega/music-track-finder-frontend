import { configureStore } from '@reduxjs/toolkit';
import trackFinderReducer from './trackFinderSlice';

export const store = configureStore({
  reducer: {
    track: trackFinderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
