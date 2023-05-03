import { Link } from 'react-router-dom';
import content from '../Content/content_en.json'
import Spaceship_image from '../Images/Portfolio/Spaceship/Spaceship_front_led.jpg'

const PortfolioList = () => {
  return (
    <div className="portfolioList">
      <Link to='/Spaceship' className='frosted'>
        <p>{content.spaceship_title}</p>
        <img src={Spaceship_image} alt='The spaceship toy from the front, with lit up LEDs'></img>
      </Link>
    </div>
  );
}

export default PortfolioList;