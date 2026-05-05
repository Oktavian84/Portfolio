import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-card contact-info-card">
          <h3>Contact</h3>
          <p><strong>Name:</strong> Oktavian Paunku (Oki)</p>
          <p><strong>Phone:</strong> +46 70 972 40 87</p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:oggy134@hotmail.com">oggy134@hotmail.com</a>
          </p>
          <div className="contact-icons">
            <a href="https://github.com/Oktavian84" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/paunku-oktavian/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        <div className="contact-card cv-card">
          <h3>CV</h3>
          <p>Download my resume (PDF).</p>
          <a className="cv-download" href="/cv/CV.pdf" download>
            <FaDownload aria-hidden="true" /> Download CV
          </a>
        </div>

        <div className="profile-card">
          <img src="/images/Hero.jpeg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
