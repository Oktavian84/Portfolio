import { useState, type ReactNode } from "react";

type SchoolProjectsSectionProps = {
  scrollAnimation?: boolean;
  /** Full list on Projects page; home shows Star Wars, OMDB, CINC ART, and Podmanager.AI only (reversed order vs. chronological). */
  showAllProjects?: boolean;
  /** Section title; Projects page uses default "School Projects". */
  heading?: string;
};

type ProjectKey =
  | "quiz"
  | "sweets"
  | "whack"
  | "starwars"
  | "omdb"
  | "hungry"
  | "cinc"
  | "pod";

/** Latest Projects on home: newest first (Podmanager.AI → … → Star Wars). */
const HOME_ORDER: ProjectKey[] = ["pod", "cinc", "omdb", "starwars"];

const FULL_ORDER: ProjectKey[] = [
  "quiz",
  "sweets",
  "whack",
  "starwars",
  "omdb",
  "hungry",
  "cinc",
  "pod",
];

const FLIP_CARD_NOT_LIVE_MESSAGE =
  "This project is not live online because it would incur recurring monthly costs. Move the cursor away or click again to flip back.";

const SchoolProjectsSection = ({
  scrollAnimation = true,
  showAllProjects = true,
  heading = "School Projects",
}: SchoolProjectsSectionProps) => {
  const [hungryHubFlipped, setHungryHubFlipped] = useState(false);
  const [whackFlipped, setWhackFlipped] = useState(false);

  const aosProps = scrollAnimation
    ? {
        "data-aos": "fade-up" as const,
        "data-aos-anchor": ".hero-section",
        "data-aos-anchor-placement": "bottom-center" as const,
        "data-aos-offset": "0",
        "data-aos-once": "false",
      }
    : {};

  const renderProject = (key: ProjectKey): ReactNode => {
    switch (key) {
      case "quiz":
        return (
          <a
            key={key}
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
        );
      case "sweets":
        return (
          <a
            key={key}
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
        );
      case "whack":
        return (
          <div
            key={key}
            className={`project-item project-item--flip ${
              whackFlipped ? "project-item--flipped" : ""
            }`}
            onClick={() => setWhackFlipped((v) => !v)}
            onMouseLeave={() => setWhackFlipped(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setWhackFlipped((v) => !v);
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={whackFlipped}
            aria-label="Whack a Mole — click to read why there is no live link"
          >
            <div className="project-item-flip-inner">
              <div className="project-item-flip-face project-item-flip-face--front">
                <img src="/images/Whack.png" alt="Whack a Mole game" />
                <div className="project-text">
                  <h3>Whack a Mole</h3>
                  <p>
                    A real-time Whack a Mole game in the browser, powered by
                    Socket.IO so every player sees the same board. Group
                    project work with websockets and live scoring.
                  </p>
                </div>
              </div>
              <div className="project-item-flip-face project-item-flip-face--back">
                <p className="project-item-flip-message">
                  {FLIP_CARD_NOT_LIVE_MESSAGE}
                </p>
              </div>
            </div>
          </div>
        );
      case "starwars":
        return (
          <a
            key={key}
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
                API project. Rich design with React. My first React project.
              </p>
            </div>
          </a>
        );
      case "omdb":
        return (
          <a
            key={key}
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
                dynamic search filtering. Clean design with React. Implementing
                TanStack Querry.
              </p>
            </div>
          </a>
        );
      case "hungry":
        return (
          <div
            key={key}
            className={`project-item project-item--flip ${
              hungryHubFlipped ? "project-item--flipped" : ""
            }`}
            onClick={() => setHungryHubFlipped((v) => !v)}
            onMouseLeave={() => setHungryHubFlipped(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setHungryHubFlipped((v) => !v);
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={hungryHubFlipped}
            aria-label="Hungry Hub — click to read why the project is not live online"
          >
            <div className="project-item-flip-inner">
              <div className="project-item-flip-face project-item-flip-face--front">
                <img src="/images/Project5.png" alt="Hungry Hub" />
                <div className="project-text">
                  <h3>Hungry Hub</h3>
                  <p>
                    A restaurant and café guide with live map markers and
                    details. Built in React with Firestore and Google Maps. My
                    last group project and first time using Firestore.
                  </p>
                </div>
              </div>
              <div className="project-item-flip-face project-item-flip-face--back">
                <p className="project-item-flip-message">
                  {FLIP_CARD_NOT_LIVE_MESSAGE}
                </p>
              </div>
            </div>
          </div>
        );
      case "cinc":
        return (
          <a
            key={key}
            href="https://bachelor-thesis-sandy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <img
              src="/images/Project6.png"
              alt="CINC ART bachelor thesis site"
            />
            <div className="project-text">
              <h3>CINC ART</h3>
              <p>
                A marketing site for a welded metal sculpture brand, with
                gallery pages and contact. Built around a CMS for editable
                content. My bachelor thesis project.
              </p>
            </div>
          </a>
        );
      case "pod":
        return (
          <a
            key={key}
            href="https://podmanager.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <img src="/images/PodmanagerAI.png" alt="Podmanager.AI" />
            <div className="project-text">
              <h3>Podmanager.AI</h3>
              <p>
                I made my internship at Podmanager, focusing on the frontend,
                UX/UI design and product testing. I was responsible for the UI
                and worked closely with the entire team on discoard, daily.
              </p>
            </div>
          </a>
        );
      default:
        return null;
    }
  };

  const order = showAllProjects
    ? [...FULL_ORDER].reverse()
    : HOME_ORDER;

  return (
    <section
      className={`projects-section${
        showAllProjects ? "" : " projects-section--before-scroll-pill"
      }`}
      {...aosProps}
    >
      <h2 className="projects-heading">{heading}</h2>

      <div className="projects-grid">{order.map(renderProject)}</div>
    </section>
  );
};

export default SchoolProjectsSection;
