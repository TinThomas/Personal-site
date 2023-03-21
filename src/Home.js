import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homePage">
      <h1 className="pageHeader">Thomas Bærentsen</h1>
      <div className="homeNavButtons">
        <Link to="/pending-construction">
          <button className="navButton">About me</button>
        </Link>
        <Link to="/pending-construction">
          <button className="navButton">Portfolio</button>
        </Link>
      </div>

    </div>
  );
}

export default Home;