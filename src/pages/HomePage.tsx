const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-inner">
            <div className="hero-image">
              <img src="/images/Hero.jpeg" alt="Oktavian Paunku" />
            </div>

            <div className="hero-text">
              <h1 className="main-heading">YOUR VISION, MY DESIGN</h1>
              <h2>Creative, active, and always attractive.</h2>
              <p>
                Welcome to my creative world! I'm a passionate designer and
                developer crafting unique digital experiences. Explore my
                skills, experience, projects and see how I can take your vision
                to the next level.
              </p>
              <button className="contact-btn">Contact Info</button>
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
                Choose difficulty and challenge yourself! My first JavaScript project.
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
    </>
  );
};

export default HomePage;
