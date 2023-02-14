import { Outlet, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ProfileIcon from '@mui/icons-material/AccountCircle';

export const NavBar = () => {
  return (
    <>
      <Outlet />
      <div className="footer">
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
      </div>
    </>
  );
};
