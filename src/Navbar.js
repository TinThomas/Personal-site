import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Thomas Bærentsen</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/pending-construction">About me</Link>
        <Link className="dropdown" to="/pending-construction">Portfolio
          <div className="dropdown-content">
            <p>Item one</p>
            <p>Item two</p>
          </div>
        </Link>

        <Link to="/pending-construction">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;