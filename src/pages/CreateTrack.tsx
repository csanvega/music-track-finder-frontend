import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import CreateTrackForm from '../components/CreateTrackForm';
import type { AppDispatch, RootState } from '../store/store';
import { createTrack } from '../store/trackFinderSlice';

export default function CreateTrack() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.track);

  const handleCreateTrack = async (isrc: string): Promise<void> => {
    const result = await dispatch(createTrack(isrc));
    if (createTrack.fulfilled.match(result)) {
      navigate(`/track/${isrc}`);
    }
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
      {error && <Alert severity="error">This is an error Alert.</Alert>}
      {loading && <CircularProgress />}
    </Box>
  );
}
