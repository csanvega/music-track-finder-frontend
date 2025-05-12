import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

interface CreateTrackFormProps {
  onCreateTrack: (isrc: string) => void;
}

export default function CreateTrackForm({
  onCreateTrack,
}: CreateTrackFormProps) {
  const [isrc, setIsrc] = useState('');
  const [errorIsrc, setErrorIsrc] = useState('');

  const validateForm = (): boolean => {
    if (!isrc) {
      setErrorIsrc('ISRC is required');
      return false;
    }
    setErrorIsrc('');
    return true;
  };

  const handleCreate = (): void => {
    if (!validateForm()) {
      return;
    }
    onCreateTrack(isrc);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleCreate();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleCreate();
    }
  };

  const handleChangeIsrc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsrc(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container
        sx={{
          pt: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 80,
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
            minHeight: 80,
          }}
        >
          <TextField
            fullWidth
            size="medium"
            placeholder="Type ISRC..."
            onChange={handleChangeIsrc}
            onKeyDown={handleKeyDown}
            autoFocus
            error={errorIsrc !== ''}
            helperText={errorIsrc ?? ''}
          />
          <Button
            sx={{ ml: 3 }}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Create
          </Button>
        </Box>
      </Container>
    </form>
  );
}
