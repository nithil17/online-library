import { Link, useLocation } from "react-router-dom";

function NotFound() {

  const location = useLocation();

  return (
    <div>

      <h1>404 Page Not Found</h1>

      <p>{location.pathname}</p>

      <Link to="/">
        Go Home
      </Link>

    </div>
  );
}

export default NotFound;