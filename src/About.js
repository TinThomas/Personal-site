import profilePicture from "./Images/Profile-picture-small.jpg"
import content from './Content/content_en.json'

import AboutBlock from "./AboutBlock";

const About = () => {
  return (
    <div className="About">
      <div className="About-contents">

        <AboutBlock title={content.intro_paragraph_title} body={content.intro_paragraph_body}></AboutBlock>

        <AboutBlock title={content.tools_and_technologies_title} body={content.tools_and_technologies_body}></AboutBlock>
        <AboutBlock title={content.Languages_and_frameworks_title} body={content.Languages_and_frameworks_body}></AboutBlock>
        <AboutBlock title={content.work_methods_title} body={content.work_methods_body}></AboutBlock>

      </div>
      <img className="About-image" src={profilePicture} alt="Profile" />
    </div>
  );
}

export default About;