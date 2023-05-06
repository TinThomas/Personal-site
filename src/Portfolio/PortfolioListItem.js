import { Link } from 'react-router-dom';

const PortfolioListItem = ({name, link, imgsrc}) => {
  return (
    <Link to={link} className='portfolioItem'
      style={{backgroundImage: `url(${imgsrc})`}}>
        <p>{name}</p>
        <div class="overlay"></div>
    </Link>
  );
}

export default PortfolioListItem;