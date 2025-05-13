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
        error instanceof Error ? error.message : 'Failed creating track'
      );
    }
  }
);

export const getTrackMetadata = createAsyncThunk(
  'track/get',
  async (isrc: string, { rejectWithValue }) => {
    try {
      const track = await trackFinderApi.getTrackMetadata(isrc);
      return { ...track };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Failed getting track'
      );
    }
  }
);

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    clearState: (state) => {
      state.currentTrack = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTrack.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.currentTrack = null;
      })
      .addCase(createTrack.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.currentTrack = action.payload;
      })
      .addCase(createTrack.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.currentTrack = null;
      })
      .addCase(getTrackMetadata.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.currentTrack = null;
      })
      .addCase(getTrackMetadata.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.currentTrack = action.payload;
      })
      .addCase(getTrackMetadata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.currentTrack = null;
      });
  },
});

export const { clearState } = trackSlice.actions;

export default trackSlice.reducer;
