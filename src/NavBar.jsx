import { Outlet, Link, Navigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useState } from 'react';
import { useUserDb } from './utils/firebase';

export const NavBar = () => {
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = useState(pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Outlet />
      <div style={{ height: '5rem' }} />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          sx={{ justifyContent: 'space-evenly' }}
          showLabels
          value={value}
          onChange={handleChange}>
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Explore"
            value="/"
            icon={<PublicIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};
