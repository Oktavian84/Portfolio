import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="contact-page-wrapper">
      <section className="contact-page">
        <div className="contact-container">
          <div className="contact-card merged-card">
            <div className="merged-section contact-info">
              <h3>Contact</h3>
              <p>
                <strong>Phone:</strong> +46 70 972 40 87
              </p>
              <p>
                <strong>Email:</strong>
                <a href="mailto:oggy134@hotmail.com">oggy134@hotmail.com</a>
              </p>
              <div className="contact-icons">
                <a
                  href="https://github.com/Oktavian84"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/paunku-oktavian/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="merged-section address-info">
              <h3>Address</h3>
              <p>
                <strong>Name:</strong> Oktavian Paunku
              </p>
              <p>
                <strong>Street:</strong> Sveaborgsgatan 2C
              </p>
              <p>
                <strong>ZIP/City:</strong> 213 61 Malmö
              </p>
              <p>
                <strong>Country:</strong> Sweden
              </p>
            </div>
          </div>

          <div className="contact-card profile-card">
            <img src="/images/Hero.jpeg" alt="Profile" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
