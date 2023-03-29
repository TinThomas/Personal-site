import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Thomas Bærentsen</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/pending-construction">About me</Link>
        <div className="dropdown">
          <Link to="/pending-construction">Portfolio</Link>
          <div className="dropdown-content">
            <p className="dropdown-item">Item one</p>
            <p className="dropdown-item">Item two</p>
          </div>
        </div>


        <Link to="/pending-construction">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;