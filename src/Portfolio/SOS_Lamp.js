import content from '../Content/content_en.json'
import PortfolioBlockRight from "./Components/PortfolioBlockRight";
import PortfolioBlockLeft from './Components/PortfolioBlockLeft';

import full from '../Images/Portfolio/SOS/Lamp_full_below.jpg'
import motion from '../Images/Portfolio/SOS/Lamp-fixed.png'
import servos from '../Images/Portfolio/SOS/Lamp_servos.jpg'

const SOS_Lamp = () => {
  return (
    <div className="portfolioPage">
      <PortfolioBlockRight text={content.SOS_paragraph_1} img={full}/>
      <PortfolioBlockLeft text={content.SOS_paragraph_2} img={motion}/>
      <PortfolioBlockRight text={content.SOS_paragraph_3} img={servos}/>
    </div>
  );
}

export default SOS_Lamp;