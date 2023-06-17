import content from '../Content/content_en.json'
import PortfolioBlockRight from "./Components/PortfolioBlockRight";
import PortfolioBlockLeft from './Components/PortfolioBlockLeft';
import Selection from '../Images/Portfolio/Bachelor/Buying-ticket-confirm.png';

const Bachelor = () => {
  return (
    <div className="portfolioPage">
    <PortfolioBlockRight text={content.Bachelor_paragraph_1} img={Selection}/>
  </div>
  );
}

export default Bachelor;