import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Thomas Bærentsen</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About me</Link>

        <div className="dropdown">
          <Link to="/pending-construction">Portfolio</Link>
          <div className="dropdown-content">
            <Link to="/Spaceship" className="dropdown-item">Spaceship Toy</Link>
            <Link to="/pending-construction" className="dropdown-item">Item two</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;