import PortfolioBlockRight from "./PortfolioBlockRight";

import content from '../Content/content_en.json'
import Spaceship_front_led from '../Images/Portfolio/Spaceship/Spaceship_front_led.jpg'
import Spaceship_exploded from '../Images/Portfolio/Spaceship/Spaceship_exploded.png'
import PortfolioBlockLeft from "./PortfolioBlockLeft";

const Spaceship = () => {
  return (
    <div className="portfolioPage">
      <PortfolioBlockRight text={content.spaceship_paragraph_1} img={Spaceship_front_led}/>
      <PortfolioBlockLeft text={content.spaceship_paragraph_2} img={Spaceship_exploded}/>
    </div>
  );
}

export default Spaceship;