import content from '../Content/content_en.json'
import PortfolioBlockRight from "./PortfolioBlockRight";
import PortfolioBlockLeft from './PortfolioBlockLeft';

import Final_prototype from '../Images/Portfolio/KLS/Final_prototype.jpg'

const KLS = () => {
  return (
  <div className="portfolioPage">
    <PortfolioBlockRight text={content.KLS_paragraph_1} img={Final_prototype}/>
  </div>
);
}
export default KLS;