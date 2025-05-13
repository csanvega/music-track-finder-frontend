import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import AlbumCard from '../components/AlbumCard';
import type { AppDispatch, RootState } from '../store/store';
import { getTrackMetadata } from '../store/trackFinderSlice';

export default function TrackMetadata() {
  const { isrc } = useParams<{ isrc: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const { currentTrack, loading, error } = useSelector(
    (state: RootState) => state.track
  );

  useEffect(() => {
    //TODO: Fix issue with rendering album incorrectly
    if (isrc && !currentTrack && !loading) {
      dispatch(getTrackMetadata(isrc));
    }
  }, [currentTrack, dispatch, isrc, loading]);

  return (
    <Box>
      {currentTrack && <AlbumCard track={currentTrack} />}
      {error && <Alert severity="error">{error}</Alert>}
      {loading && <CircularProgress />}
    </Box>
  );
}
