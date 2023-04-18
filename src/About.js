import profilePicture from "./Images/Profile-picture-small.jpg"

const About = () => {
  return (
    <div className="About">
      <div className="About-contents">Content goes here</div>
      <img src={profilePicture} alt="Profile" />
    </div>
  );
}

export default About;