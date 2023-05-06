import content from '../Content/content_en.json'
import PortfolioListItem from './PortfolioListItem';
import Spaceship_image from '../Images/Portfolio/Spaceship/Spaceship_front_led.jpg'
import KLS_image from '../Images/Portfolio/KLS/Render.png'

const PortfolioList = () => {
  return (
    <div className="portfolioList">
      <PortfolioListItem name={content.spaceship_title} link='/Spaceship' imgsrc={Spaceship_image} />
      <PortfolioListItem name={content.KLS_title} link='/KLS' imgsrc={KLS_image} />
    </div>
  );
}

export default PortfolioList;