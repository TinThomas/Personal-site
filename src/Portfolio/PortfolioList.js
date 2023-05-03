import content from '../Content/content_en.json'
import Spaceship_image from '../Images/Portfolio/Spaceship/Spaceship_front_led.jpg'

const PortfolioList = () => {
  return (
    <div className="portfolioList">
      <section>
        <p>{content.spaceship_title}</p>
        <img src={Spaceship_image}></img>
      </section>
    </div>
  );
}

export default PortfolioList;