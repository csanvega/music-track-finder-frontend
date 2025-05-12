import AddCircleIcon from '@mui/icons-material/AddCircle';
import AlbumIcon from '@mui/icons-material/Album';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchFormNavBar from './SearchFormNavBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

export default function NavigationAppBar() {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/create');
  };

  const handleSearch = (isrc: string): void => {
    if (isrc) {
      navigate(`/track/${isrc}`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <AlbumIcon sx={{ marginRight: '0.5em' }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Track Finder
          </Typography>

          <SearchFormNavBar onClickSearch={handleSearch} />

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddCircleIcon />}
              onClick={handleCreate}
            >
              Create Track
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton aria-label="add">
              <AddCircleIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
