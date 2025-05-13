import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Container
      sx={{
        pt: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography gutterBottom variant="h4" component="div">
        Welcome to Track Finder!
      </Typography>
      <Typography variant="h5" component="div" color="info">
        Here you can find information about your favorite records. First, you
        need to create the tracks using the 'Create Track' button, and then you
        can search for the records through the search bar using the ISRC.
      </Typography>
    </Container>
  );
}
