import content from '../Content/content_en.json'
import Spaceship_image from '../Images/Portfolio/Spaceship/Spaceship_front_led.jpg'
import PortfolioListItem from './PortfolioListItem';

const PortfolioList = () => {
  return (
    <div className="portfolioList">
      <PortfolioListItem name={content.spaceship_title} link='/Spaceship' imgsrc={Spaceship_image} />
      <PortfolioListItem name={content.spaceship_title} link='/Spaceship' imgsrc={Spaceship_image} />
    </div>
  );
}

export default PortfolioList;