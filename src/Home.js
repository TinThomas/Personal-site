import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homePage">
        <div className="homeNavButtons frosted">
          <Link to="/About">
            <button className="navButton">About me</button>
          </Link>
          <Link to="/Portfolio">
            <button className="navButton">Portfolio</button>
          </Link>
          <Link to="/pending-construction">
            <button className="navButton">Contact</button>
          </Link>
        </div>
    </div>
  );
}

export default Home;