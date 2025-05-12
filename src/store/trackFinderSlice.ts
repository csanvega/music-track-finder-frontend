import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { trackFinderApi } from '../services/trackFinderApi';
import type { TrackState } from '../types';

const initialState: TrackState = {
  currentTrack: null,
  loading: false,
  error: null,
};

export const createTrack = createAsyncThunk(
  'track/create',
  async (isrc: string, { rejectWithValue }) => {
    try {
      const track = await trackFinderApi.createTrack(isrc);
      return { ...track };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Failed to create track'
      );
    }
  }
);

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTrack.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTrack.fulfilled, (state, action) => {
        state.loading = false;
        state.currentTrack = action.payload;
      })
      .addCase(createTrack.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default trackSlice.reducer;
