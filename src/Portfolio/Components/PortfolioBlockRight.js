const PortfolioBlockRight = ({text, img}) => {
  return (
    <section className="portfolioBlock">
      <p className="portfolioParagraph frosted">{text}</p>
      <img className="dropshadow" src={img} alt="Portfolio product"></img>
    </section>
  );
}

export default PortfolioBlockRight;