import profilePicture from "./Images/Profile-picture-small.jpg"
import content from './Content/content_en.json'

const About = () => {
  return (
    <div className="About">
      <div className="About-contents">
        <p>{content.intro_paragraph}</p>
      </div>
      <img className="About-image" src={profilePicture} alt="Profile" />
    </div>
  );
}

export default About;