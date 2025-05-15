import { useMatch, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AlbumIcon from '@mui/icons-material/Album';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import SearchFormNavBar from '../components/SearchFormNavBar';
import type { AppDispatch, RootState } from '../store/store';
import {
  clearTrackCreated,
  clearTrackSelected,
  setIsrcSearchValue,
} from '../store/trackFinderSlice';

export default function NavigationAppBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isCreateRoute = useMatch('/create');
  const isrcSearchValue = useSelector(
    (state: RootState) => state.track.isrcSearchValue
  );

  const handleCreate = () => {
    dispatch(clearTrackCreated());
    navigate('/create', { replace: true });
  };

  const handleSearch = (isrc: string): void => {
    const hasNewInputToSearch = isrcSearchValue && isrcSearchValue !== isrc;
    const hasInputWithoutPriorSearch = !isrcSearchValue && isrc;
    if (hasNewInputToSearch || hasInputWithoutPriorSearch || isCreateRoute) {
      dispatch(clearTrackSelected());
      dispatch(setIsrcSearchValue(isrc));
      navigate(`/track/${isrc}`, { replace: true });
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
            <IconButton aria-label="add" onClick={handleCreate}>
              <AddCircleIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
