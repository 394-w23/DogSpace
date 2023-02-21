import { Outlet, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
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
          sx={{ justifyContent: 'space-evenly', color: 'gray', backgroundColor: '#D3D3D3'}}
          showLabels
          value={value}
          onChange={handleChange}>
          <BottomNavigationAction
            sx = {{color: 'gray'}}
            component={Link}
            to="/home"
            label="Home"
            value="/home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Explore"
            value="/"
            icon={<PublicIcon />}
            
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
