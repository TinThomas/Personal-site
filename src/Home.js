import { Link } from "react-router-dom";
import profilePicture from "./Images/Profile-picture.jpg"

const Home = () => {
  return (
    <div className="homePage">

      <section className="homePageContent">
        <div className="homeNavButtons">
          <Link to="/pending-construction">
            <button className="navButton">About me</button>
          </Link>
          <Link to="/pending-construction">
            <button className="navButton">Portfolio</button>
          </Link>
        </div>

        <img className="homePageImage" src={profilePicture} alt="Me">

        </img>
      </section>

    </div>
  );
}

export default Home;