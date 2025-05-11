import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

export default function AlbumCard() {
  return (
    <Container
      sx={{
        pt: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          borderRadius: 2,
          maxWidth: { xs: 300, md: 600 },
        }}
      >
        <CardMedia
          sx={{
            height: 300,
            width: 300,
            objectFit: 'cover',
            minWidth: 300,
          }}
          image="albumCoverExample.jpeg"
          title="Album Cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Wake Up Mr. West
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            Kanye West
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            Duration: 4:20
          </Typography>
          <Chip sx={{ mt: '0.5rem' }} label="Explicit" />
        </CardContent>
      </Card>
    </Container>
  );
}
