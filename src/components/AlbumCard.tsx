import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import type { Track } from '../types';
import { formatMillisToMinutesSeconds } from '../libs/formatters';

interface AlbumCardProps {
  track: Track;
}

export default function AlbumCard({ track }: AlbumCardProps) {
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
          image={track.coverUrl}
          title="Album Cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {track.name}
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            {track.artistName}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            Duration: {formatMillisToMinutesSeconds(track.playbackSeconds)}
          </Typography>
          {track.isExplicit ? (
            <Chip
              sx={{ mt: '0.5rem' }}
              label="Explicit"
              color="primary"
              variant="filled"
            />
          ) : (
            <Chip
              sx={{ mt: '0.5rem' }}
              label="No Explicit"
              color="primary"
              variant="outlined"
            />
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
