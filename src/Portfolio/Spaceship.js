import PortfolioBlockRight from "./PortfolioBlockRight";

import content from '../Content/content_en.json'
import Spaceship_front_led from '../Images/Portfolio/Spaceship/Spaceship_front_led.jpg'

const Spaceship = () => {
  return (
    <div className="portfolioPage">
      <PortfolioBlockRight text={content} img={Spaceship_front_led}/>
    </div>
  );
}

export default Spaceship;