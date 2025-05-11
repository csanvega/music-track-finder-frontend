import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function CreateTrackForm() {
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
        Enter the ISRC to create a track
      </Typography>

      <Box
        sx={{
          ml: 3,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: { sm: 400, md: 600 },
        }}
      >
        <TextField fullWidth size="medium" placeholder="Type ISRC..." focused />
        <Button sx={{ ml: 3 }} variant="contained" color="secondary">
          Create
        </Button>
      </Box>
    </Container>
  );
}
