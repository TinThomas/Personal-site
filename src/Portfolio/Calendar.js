import content from '../Content/content_en.json'
import PortfolioBlockRight from "./Components/PortfolioBlockRight";
import PortfolioBlockLeft from './Components/PortfolioBlockLeft';
import User from '../Images/Portfolio/Calendar/User.jpg'
import Prototype from '../Images/Portfolio/Calendar/Prototype.png'
import Thinkaloud from '../Images/Portfolio/Calendar/ThinkAloud.jpg'

const Calendar = () => {
  return (
    <div className="portfolioPage">
    <PortfolioBlockRight text={content.Calendar_paragraph_1} img={Prototype}/>
    <PortfolioBlockLeft text={content.Calendar_paragraph_2} img={User}/>
    <PortfolioBlockRight text={content.Calendar_paragraph_3} img={Thinkaloud}/>
    </div>
  );
}

export default Calendar;