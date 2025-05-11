import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import NavigationAppBar from './components/NavigationAppBar';
import Home from './components/Home';

export default function App() {
  return (
    <Container>
      <CssBaseline />
      <NavigationAppBar />
      <Box sx={{ mt: '5rem' }}>
        <Home></Home>
      </Box>
    </Container>
  );
}
