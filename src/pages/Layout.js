import { Outlet, Link } from "react-router-dom";

// TODO: Set this up correctly later using the NavBar component.
function Layout() {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <Link />
      <Outlet />
    </>
  );
}

export default Layout;
