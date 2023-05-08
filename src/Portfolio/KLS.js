import content from '../Content/content_en.json'
import PortfolioBlockRight from "./PortfolioBlockRight";
import PortfolioBlockLeft from './PortfolioBlockLeft';

import Final_prototype from '../Images/Portfolio/KLS/Final_prototype.jpg'
import bms from '../Images/Portfolio/KLS/bms.png'

const KLS = () => {
  return (
  <div className="portfolioPage">
    <PortfolioBlockRight text={content.KLS_paragraph_1} img={Final_prototype}/>
    <PortfolioBlockLeft text={content.KLS_paragraph_2} img={bms}/>
  </div>
);
}
export default KLS;