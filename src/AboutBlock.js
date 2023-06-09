const AboutBlock = ({title, body}) => {
  return (
    <div className="AboutBlock frosted">
      <h2 className="title">{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default AboutBlock;