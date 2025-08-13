import SkillsCarousel from "../components/SkillsCarousel";

const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-inner">
            <div className="hero-image">
              <img src="/images/Hero5.jpeg" alt="Oktavian Paunku" />
            </div>

            <div className="hero-text">
              <h1 className="main-heading">
                YOUR VISION, <span className="design">MY DESIGN</span>
              </h1>
              <h2>Creative, active and always attractive.</h2>
              <p>
                Welcome to my creative world. I am a passionate designer and
                developer who crafts unique digital experiences.<br/> Explore my
                projects, skills and experience to see how I can take your
                vision to the next level. <br/>While this website is still a work in progress, feel free to reach out using the contact details provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h2 className="projects-heading">School Projects</h2>

        <div className="projects-grid">
          <a
            href="https://quizgamefed24.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <img src="/images/Project1.png" alt="Project 1" />
            <div className="project-text">
              <h3>Quiz Game</h3>
              <p>
                A fun quiz game testing how well you know your classmates.
                Choose difficulty and challenge yourself! My first JavaScript
                project.
              </p>
            </div>
          </a>

          <a
            href="https://bortakvall7.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <img src="/images/Project2.png" alt="Project 2" />
            <div className="project-text">
              <h3>Sweets Inventory</h3>
              <p>
                Keep track of candy stock with a visual interface. Built using
                basic JS logic and DOM manipulation. My first group project.
              </p>
            </div>
          </a>

          <a
            href="https://starwars-oki.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <img src="/images/Project3.png" alt="Project 3" />
            <div className="project-text">
              <h3>Star Wars Encyclopedia</h3>
              <p>
                Browse Star Wars characters, planets and ships using a custom
                API project. Clean design with React. My first React project.
              </p>
            </div>
          </a>

          <a
            href="https://omdboki.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <img src="/images/Project4.png" alt="Project 4" />
            <div className="project-text">
              <h3>Movie Browser</h3>
              <p>
                Search for any movie using the OMDB API. Responsive layout with
                dynamic search filtering.
              </p>
            </div>
          </a>
        </div>
      </section>

      <SkillsCarousel />

      <section className="experience-section">
        <h2 className="experience-heading">Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3 className="experience-title">Work</h3>
            <p>
              <strong>
                <span className="place">Bonakemi</span> <br />
                (2004–2010)
              </strong>
              <br />
              Machine Operator
            </p>
            <p>
              <strong>
                <span className="place">Global Bygg AB</span> <br />
                (2010–2012)
              </strong>
              <br />
              Designer
            </p>
            <p>
              <strong>
                <span className="place">Bold Printing Malmö AB</span> <br />
                (2010–2024)
              </strong>
              <br />
              Machine Operator
            </p>
          </div>
          <div className="experience-card">
            <h3 className="experience-title">Education</h3>
            <p>
              <strong>
                <span className="place">Malmö Latinskola</span> <br />
                (2000–2003)
              </strong>
              <br />
              Science Program (Math/Data)
            </p>
            <p>
              <strong>
                <span className="place">Malmö University</span> <br />
                (2003–2006)
              </strong>
              <br />
              Construction Engineering (Design)
            </p>
            <p>
              <strong>
                <span className="place">Medieinstitutet</span> <br />
                (2024–2026)
              </strong>
              <br />
              Frontend Developer
            </p>
          </div>
          <div className="experience-card">
            <h3 className="experience-title">Languages</h3>
            <p><span className="place">Swedish</span> (Fluent in speech and writing)</p>
            <p><span className="place">English </span> (Fluent in speech and writing)</p>
            <p><span className="place">Serbian</span> (Fluent in speech and writing)</p>
            <p><span className="place">Romanian</span> (Intermediate speech, limited writing)</p>
          </div>
          <div className="experience-card">
            <h3 className="experience-title">Personality</h3>
            <p>Goal oriented</p>
            <p>Punctual</p>
            <p>Resilient</p>
            <p>Creative</p>
            <p>Social</p>
            <p>Considerate</p>
            <p>Technically inclined</p>
            <p>Curious</p>
          </div>
          <div className="experience-card">
            <h3 className="experience-title">Hobby</h3>
            <p>Traveling</p>
            <p>Nature</p>
            <p>Meditation</p>
            <p>Reading</p>
            <p>Drawing</p>
            <p>Gameing</p>
            <p>Movies</p>
            <p>Podcast</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
