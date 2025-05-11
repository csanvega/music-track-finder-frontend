import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router';

import NavigationAppBar from './components/NavigationAppBar';
import Home from './pages/Home';
import CreateTrack from './pages/CreateTrack';
import TrackDetails from './pages/TrackDetails';

export default function App() {
  return (
    <Container>
      <CssBaseline />
      <NavigationAppBar />
      <Box sx={{ mt: '5rem' }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/create" element={<CreateTrack />} />
          <Route path="/track/:id" element={<TrackDetails />} />
        </Routes>
      </Box>
    </Container>
  );
}
