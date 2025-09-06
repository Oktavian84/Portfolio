// pages/HomePage.tsx
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
                <span className="hello-move">Hello,</span> <br /> My name is
                Oktavian. I'm a passionate developer, striving to craft
                responsive and unique digital experiences. <br />
                Welcome to my creative world, explore my projects and skills to
                see how I can take your vision to the next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS – ankrad till HERO */}
      <section
        className="projects-section"
        data-aos="fade-up"
        data-aos-anchor=".hero-section"
        data-aos-anchor-placement="bottom-top"
        data-aos-offset="0"
      >
        <h2 className="projects-heading">Latest Projects</h2>

        <div className="projects-grid">
          <a
            href="https://quizgamefed24.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <img src="/images/Project1.png" alt="Quiz Game" />
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
            <img src="/images/Project2.png" alt="Sweets Inventory" />
            <div className="project-text">
              <h3>Sweets Inventory</h3>
              <p>
                Keep track of candy stock with a visual interface. Built using
                TS logic and DOM manipulation. My first group project.
              </p>
            </div>
          </a>

          <a
            href="https://starwars-oki.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <img src="/images/Project3.png" alt="Star Wars Encyclopedia" />
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
            <img src="/images/Project4.png" alt="OMDB" />
            <div className="project-text">
              <h3>OMDB</h3>
              <p>
                Search for any movie using the OMDB API. Responsive layout with
                dynamic search filtering. Implementing TanStack Querry.
              </p>
            </div>
          </a>

          <a
            href="https://fed24hungryhub.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <img src="/images/Project5.png" alt="Hungry Hub" />
            <div className="project-text">
              <h3>Hungry Hub</h3>
              <p>
                A restaurant and café guide with live map markers and details.
                Built in React with Firestore and Google Maps. My last group
                project and first time using Firestore.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* SKILLS – ankrad till PROJECTS (renderas i komponenten) */}
      <SkillsCarousel />

      {/* EXPERIENCE – ankrad till SKILLS */}
      <section
        className="experience-section"
        data-aos="fade-up"
        data-aos-anchor=".skills-section"
        data-aos-anchor-placement="bottom-top"
        data-aos-offset="0"
      >
        <h2 className="experience-heading">Experiences</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3 className="experience-title">Work</h3>
            <p>
              <span className="place">Bonakemi</span> <br />
              <span className="extra-info-date">(2004–2010)</span>
              <br />
              Machine Operator
            </p>
            <p>
              <span className="place">Global Bygg AB</span> <br />
              <span className="extra-info-date">(2010–2012)</span>
              <br />
              Designer
            </p>
            <p>
              <span className="place">Bold Printing Malmö AB</span> <br />
              <span className="extra-info-date">(2010–2024)</span>
              <br />
              Machine Operator
            </p>
          </div>
          <div className="experience-card">
            <h3 className="experience-title">Education</h3>
            <p>
              <span className="place">Malmö Latinskola</span> <br />
              <span className="extra-info-date">(2000–2003)</span>
              <br />
              Science Program <span className="extra-info">(Math/Computer)</span>
            </p>
            <p>
              <span className="place">Malmö University</span> <br />
              <span className="extra-info-date">(2003–2006)</span>
              <br />
              Construction Engineering <span className="extra-info">(Design)</span>
            </p>
            <p>
              <span className="place">Medieinstitutet</span> <br />
              <span className="extra-info-date">(2024–2026)</span>
              <br />
              Frontend Developer
            </p>
          </div>
          <div className="experience-card">
            <h3 className="experience-title">Languages</h3>
            <p>
              <span className="place">Swedish</span>
              <br /> <span className="stars stars-4-5"></span>
            </p>
            <p>
              <span className="place">English</span>
              <br /> <span className="stars stars-4-5"></span>
            </p>
            <p>
              <span className="place">Serbian</span>
              <br /> <span className="stars stars-3-5"></span>
            </p>
            <p>
              <span className="place">Romanian</span>
              <br /> <span className="stars stars-3"></span>
            </p>
          </div>
          <div className="experience-card">
            <h3 className="experience-title">Personality</h3>
            <p>
              <span className="place">Goal oriented</span>
            </p>
            <p>
              <span className="place">Resilient</span>
            </p>
            <p>
              <span className="place">Technically inclined</span>
            </p>
            <p>
              <span className="place">Creative</span>
            </p>
            <p>
              <span className="place">Social</span>
            </p>
            <p>
              <span className="place">Considerate</span>
            </p>
            <p>
              <span className="place">Curious</span>
            </p>
          </div>
          <div className="experience-card">
            <h3 className="experience-title">Hobby</h3>
            <p>
              <span className="place">Traveling</span>
            </p>
            <p>
              <span className="place">Nature</span>
            </p>
            <p>
              <span className="place">Meditation</span>
            </p>
            <p>
              <span className="place">Reading</span>
            </p>
            <p>
              <span className="place">Drawing</span>
            </p>
            <p>
              <span className="place">Gaming</span>
            </p>
            <p>
              <span className="place">Movies</span>
            </p>
            <p>
              <span className="place">Podcast</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
