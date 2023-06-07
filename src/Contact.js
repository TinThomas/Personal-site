import content from './Content/content_en.json'
const Contact = () => {
  return (
    <div className="AboutBlock frosted">
      <p className="title">{content.Contact_title}</p>
      <p>{content.Contact_body_linkedin}
      <a href="https://www.linkedin.com/in/thomas-baerentsen/" target="blank" class="ContactLink"><strong>@ThomasBærentsen</strong></a>
      {content.Contact_body_email}
      <a href="mailto:Thomas.Baerentsen@gmail.com" class="ContactLink"><strong>Thomas.Baerentsen@gmail.com</strong></a>
      </p>
    </div>
  );
}

export default Contact;