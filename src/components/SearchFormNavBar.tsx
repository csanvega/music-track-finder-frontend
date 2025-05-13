import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';

interface SearchFormNavBarProps {
  onClickSearch: (isrc: string) => void;
}

export default function SearchFormNavBar({
  onClickSearch,
}: SearchFormNavBarProps) {
  const [isrc, setIsrc] = useState('');

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const handleChangeIsrc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsrc(e.target.value);
  };

  const handleSearch = (): void => {
    onClickSearch(isrc);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search track by ISRC"
          inputProps={{ 'aria-label': 'search' }}
          value={isrc}
          onChange={handleChangeIsrc}
          onKeyDown={handleKeyDown}
          autoFocus
          error
        />
      </Search>

      <Button variant="contained" color="secondary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
}
