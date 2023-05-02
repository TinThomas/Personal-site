const PortfolioBlockLeft = ({text, img}) => {
  return (
    <section className="portfolioBlock">
      <img className="dropshadow" src={img}></img>
      <p className="portfolioParagraph frosted">{text.spaceship_paragraph_1}</p>
    </section>
  );
}

export default PortfolioBlockLeft;