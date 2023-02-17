import { Outlet, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useState } from 'react';

export const NavBar = () => {
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = useState(pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Outlet />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          sx={{ justifyContent: 'space-evenly' }}
          showLabels
          value={value}
          onChange={handleChange}>
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Home"
            value="/"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/profile"
            label="Profile"
            value="/profile"
            icon={<ProfileIcon />}
          />
        </BottomNavigation>
      </Paper>
      {/* <div className="footer">
        <div className="foothome">
          <Link to="/">
            <div>
              <HomeIcon />
              <p style={{ margin: 0 }}>Home</p>
            </div>
          </Link>
        </div>
        <div className="footprofile">
          <Link to="/profile">
            <div>
              <ProfileIcon />
              <p style={{ margin: 0 }}>Profile</p>
            </div>
          </Link>
        </div>
      </div> */}
    </>
  );
};
