import { Outlet, Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <Outlet />
      <div className="footer">
        <div className="foothome">
          <Link to="/">Home</Link>
        </div>
        <div className="footprofile">
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </>
  );
}
