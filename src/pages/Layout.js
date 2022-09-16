import { Outlet, Link } from "react-router-dom";

// TODO: Set this up correctly later using the NavBar component.
function Layout() {
  return (
    <>
      <Link />
      <Outlet />
    </>
  );
}

export default Layout;
