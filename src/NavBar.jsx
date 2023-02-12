import { Outlet, Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <Outlet />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </>
  );
}
