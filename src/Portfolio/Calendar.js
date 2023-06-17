import content from '../Content/content_en.json'
import PortfolioBlockRight from "./Components/PortfolioBlockRight";
import PortfolioBlockLeft from './Components/PortfolioBlockLeft';
import User from '../Images/Portfolio/Calendar/User.jpg'
import Prototype from '../Images/Portfolio/Calendar/Prototype.png'

const Calendar = () => {
  return (
    <div className="portfolioPage">
    <PortfolioBlockRight text={content.Bachelor_paragraph_1} img={Prototype}/>
    <PortfolioBlockLeft text={content.Bachelor_paragraph_2} img={User}/>
    </div>
  );
}

export default Calendar;