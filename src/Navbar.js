import {Link} from "react-router-dom";
import content from './Content/content_en.json'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Thomas Bærentsen</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About me</Link>

        <div className="dropdown">
          <Link to="/Portfolio">Portfolio</Link>
          <div className="dropdown-content">
            <Link to="/Spaceship" className="dropdown-item">{content.spaceship_title}</Link>
            <Link to="/pending-construction" className="dropdown-item">Item two</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;