import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';

import CreateTrackForm from '../components/CreateTrackForm';
import type { AppDispatch, RootState } from '../store/store';
import { createTrack } from '../store/trackFinderSlice';
import AlbumCard from '../components/AlbumCard';

export default function CreateTrack() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, currentTrack } = useSelector(
    (state: RootState) => state.track
  );

  const handleCreateTrack = async (isrc: string): Promise<void> => {
    await dispatch(createTrack(isrc));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CreateTrackForm onCreateTrack={handleCreateTrack} />
      {error && <Alert severity="error">{error}</Alert>}
      {loading && <CircularProgress />}
      {currentTrack && (
        <Alert severity="success">Track was created successfully.</Alert>
      )}
      {currentTrack && <AlbumCard track={currentTrack} />}
    </Box>
  );
}
