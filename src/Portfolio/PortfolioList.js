import content from '../Content/content_en.json'
import PortfolioListItem from './Components/PortfolioListItem';
import Spaceship_image from '../Images/Portfolio/Spaceship/Spaceship_front_led.jpg'
import KLS_image from '../Images/Portfolio/KLS/Render.png'
import SOS_image from '../Images/Portfolio/SOS/Lamp_full_below.jpg'

const PortfolioList = () => {
  return (
    <div className="portfolioList">
      <PortfolioListItem name={content.SOS_title} link='/ShapeChangeLamp' imgsrc={SOS_image} />
      <PortfolioListItem name={content.spaceship_title} link='/Spaceship' imgsrc={Spaceship_image} />
      <PortfolioListItem name={content.KLS_title} link='/KLS' imgsrc={KLS_image} />
    </div>
  );
}

export default PortfolioList;