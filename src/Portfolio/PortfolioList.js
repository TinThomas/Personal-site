import content from '../Content/content_en.json'
import Spaceship_image from '../Images/Portfolio/Spaceship/Spaceship_front_led.jpg'

const PortfolioList = () => {
  return (
    <div className="portfolioList">
      <section className='frosted'>
        <p>{content.spaceship_title}</p>
        <img src={Spaceship_image} alt='The spaceship toy from the front, with lit up LEDs'></img>
      </section>
    </div>
  );
}

export default PortfolioList;