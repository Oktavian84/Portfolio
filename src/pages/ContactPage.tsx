import { useState, type FormEvent } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const OWNER_EMAIL = "oggy134@hotmail.com";

const ContactPage = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setDescription("");
  };

  const handleCancel = () => {
    setFormOpen(false);
    resetForm();
  };

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subj = subject.trim() || "Contact from portfolio";
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      "",
      "Message:",
      description.trim() || "(empty)",
    ].join("\n");
    const href = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-card contact-info-card">
          <h3>Contact</h3>
          <p>
            <strong>Name:</strong> Oktavian Paunku (Oki)
          </p>
          <p>
            <strong>Phone:</strong> +46 70 972 40 87
          </p>
          <p>
            <strong>Email:</strong>
            <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>
          </p>
          <div className="contact-icons">
            <a
              href="https://github.com/Oktavian84"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/paunku-oktavian/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <button
              type="button"
              className="contact-form-toggle"
              onClick={() => setFormOpen(true)}
              aria-expanded={formOpen}
            >
              Contact
            </button>
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

        {formOpen ? (
          <div className="contact-form-panel">
            <form className="contact-form" onSubmit={handleSend} noValidate>
              <div className="contact-form-inner">
                <div className="contact-form-cols">
                  <div className="contact-form-col contact-form-col--left">
                    <div className="contact-form-field">
                      <label htmlFor="contact-name">Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name, e.g. Alex Johnson"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                      />
                    </div>
                    <div className="contact-form-field">
                      <label htmlFor="contact-email">Email</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                      />
                    </div>
                    <div className="contact-form-field">
                      <label htmlFor="contact-subject">Subject</label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        autoComplete="off"
                        placeholder="Short summary, e.g. Portfolio feedback, job offer"
                        value={subject}
                        onChange={(ev) => setSubject(ev.target.value)}
                      />
                    </div>
                  </div>
                  <div className="contact-form-col contact-form-col--right">
                    <div className="contact-form-field contact-form-field--grow">
                      <label htmlFor="contact-description">Description</label>
                      <textarea
                        id="contact-description"
                        name="description"
                        placeholder="Describe your reason for contacting me — questions, project ideas, timeline, links, or anything else that helps."
                        value={description}
                        onChange={(ev) => setDescription(ev.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="contact-form-actions">
                  <button
                    type="button"
                    className="contact-form-cancel"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="contact-form-send">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ContactPage;
