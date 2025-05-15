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
  const { trackSelected, isrcSearchValue, loading, error } = useSelector(
    (state: RootState) => state.track
  );

  useEffect(() => {
    const isrcValue = isrcSearchValue || isrc;
    if (isrcValue && !trackSelected) {
      dispatch(getTrackMetadata(isrcValue));
    }
  }, [isrc, isrcSearchValue, trackSelected, dispatch]);

  return (
    <Box>
      {trackSelected && <AlbumCard track={trackSelected} />}
      {error && <Alert severity="error">{error}</Alert>}
      {loading && <CircularProgress />}
    </Box>
  );
}
