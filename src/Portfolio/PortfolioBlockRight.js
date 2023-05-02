const PortfolioBlockRight = ({text, img}) => {
  return (
    <section className="portfolioBlock">
      <p className="portfolioParagraph frosted">{text.spaceship_paragraph_1}</p>
      <img className="dropshadow" src={img}></img>
    </section>
  );
}

export default PortfolioBlockRight;