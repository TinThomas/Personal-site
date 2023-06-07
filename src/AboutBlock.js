const AboutBlock = ({title, body}) => {
  return (
    <div className="AboutBlock frosted">
      <p className="title">{title}</p>
      <p>{body}</p>
    </div>
  );
}

export default AboutBlock;