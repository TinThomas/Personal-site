import profilePicture from "./Images/Profile-picture-small.jpg"

const About = () => {
  return (
    <div className="About">
      <div className="About-contents">
        <p>Thing number one</p>
        <p>Thing number two</p>
      </div>
      <img className="About-image" src={profilePicture} alt="Profile" />
    </div>
  );
}

export default About;