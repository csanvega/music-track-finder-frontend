import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import NavigationAppBar from './components/NavigationAppBar'
import AlbumCard from './components/AlbumCard'

export default function App() {
  return (
    <Container>
      <NavigationAppBar />
      <Box sx={{ mt: '5rem' }}>
        <AlbumCard />
      </Box>
    </Container>
  )
}
