// pages/HomePage.tsx
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import SkillsCarousel from "../components/SkillsCarousel";
import SchoolProjectsSection from "../components/SchoolProjectsSection";

const HomePage = () => {
  /** Hero paragraph finishes fade ~5s (3.5s delay + 1.5s); +3.5s → first show ~8.5s */
  const [scrollHintUnlocked, setScrollHintUnlocked] = useState(false);
  const [scrollHintAllowed, setScrollHintAllowed] = useState(true);
  /** Chevron under Latest Projects: visible after projects AOS, hidden when Tech Stack fades in */
  const [showProjectsScrollHint, setShowProjectsScrollHint] = useState(false);
  /** Chevron under Tech Stack: visible after skills AOS, hidden when Experience fades in */
  const [showSkillsScrollHint, setShowSkillsScrollHint] = useState(false);

  useEffect(() => {
    const unlockMs = 8500;
    const id = window.setTimeout(() => setScrollHintUnlocked(true), unlockMs);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const projectsEl = () => document.querySelector(".projects-section");

    const updateScrollHint = () => {
      const el = projectsEl();
      const scrollY = window.scrollY;
      const stillNearHeroTop = scrollY < 100;
      const projectsFadingIn =
        el?.classList.contains("aos-animate") ?? false;
      setScrollHintAllowed(stillNearHeroTop && !projectsFadingIn);
    };

    updateScrollHint();

    const projects = projectsEl();
    const observer = projects
      ? new MutationObserver(updateScrollHint)
      : null;
    if (projects && observer) {
      observer.observe(projects, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    window.addEventListener("scroll", updateScrollHint, { passive: true });
    window.addEventListener("resize", updateScrollHint);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", updateScrollHint);
      window.removeEventListener("resize", updateScrollHint);
    };
  }, []);

  useEffect(() => {
    const projectsEl = () => document.querySelector(".projects-section");
    const skillsEl = () => document.querySelector(".skills-section");

    const updateProjectsHint = () => {
      const p = projectsEl();
      const s = skillsEl();
      const projectsVisible = p?.classList.contains("aos-animate") ?? false;
      const skillsVisible = s?.classList.contains("aos-animate") ?? false;
      setShowProjectsScrollHint(projectsVisible && !skillsVisible);
    };

    updateProjectsHint();

    const observer = new MutationObserver(updateProjectsHint);
    const p = projectsEl();
    const s = skillsEl();
    if (p) {
      observer.observe(p, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }
    if (s) {
      observer.observe(s, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    window.addEventListener("scroll", updateProjectsHint, { passive: true });
    window.addEventListener("resize", updateProjectsHint);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProjectsHint);
      window.removeEventListener("resize", updateProjectsHint);
    };
  }, []);

  useEffect(() => {
    const skillsEl = () => document.querySelector(".skills-section");
    const experienceEl = () =>
      document.querySelector(".experience-section");

    const updateSkillsHint = () => {
      const sk = skillsEl();
      const ex = experienceEl();
      const skillsVisible = sk?.classList.contains("aos-animate") ?? false;
      const experienceVisible =
        ex?.classList.contains("aos-animate") ?? false;
      setShowSkillsScrollHint(skillsVisible && !experienceVisible);
    };

    updateSkillsHint();

    const observer = new MutationObserver(updateSkillsHint);
    const sk = skillsEl();
    const ex = experienceEl();
    if (sk) {
      observer.observe(sk, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }
    if (ex) {
      observer.observe(ex, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    window.addEventListener("scroll", updateSkillsHint, { passive: true });
    window.addEventListener("resize", updateSkillsHint);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateSkillsHint);
      window.removeEventListener("resize", updateSkillsHint);
    };
  }, []);

  const showScrollHint = scrollHintUnlocked && scrollHintAllowed;

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
                Hello, <br /> My name is
                Oktavian. I'm a passionate developer, striving to craft
                responsive and unique digital experiences. <br />
                Welcome to my creative world, explore my projects and skills to
                see how I can take your vision to the next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`hero-scroll-hint${
          showScrollHint ? "" : " hero-scroll-hint--hidden"
        }`}
        aria-hidden="true"
      >
        <span className="hero-scroll-hint__icon">
          <FaChevronDown />
        </span>
      </div>

      <SchoolProjectsSection
        showAllProjects={false}
        heading="Latest Projects"
      />

      <div
        className={`projects-scroll-hint${
          showProjectsScrollHint ? "" : " projects-scroll-hint--hidden"
        }`}
        aria-hidden="true"
      >
        <span className="projects-scroll-hint__icon">
          <FaChevronDown />
        </span>
      </div>

      {/* SKILLS – ankrad till PROJECTS (renderas i komponenten) */}
      <SkillsCarousel />

      <div
        className={`skills-scroll-hint${
          showSkillsScrollHint ? "" : " skills-scroll-hint--hidden"
        }`}
        aria-hidden="true"
      >
        <span className="skills-scroll-hint__icon">
          <FaChevronDown />
        </span>
      </div>

      {/* EXPERIENCE – ankrad till SKILLS */}
      <section
        className="experience-section"
        data-aos="fade-up"
        data-aos-anchor=".skills-section"
        data-aos-anchor-placement="bottom-center"
        data-aos-offset="-120"
      >
        <h2 className="experience-heading">Experiences</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3 className="experience-title">Work</h3>
             <p>
              <span className="place">Bold Printing Malmö AB</span> <br />
              <span className="extra-info-date">(2010–2024)</span>
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
              <span className="place">Bonakemi</span> <br />
              <span className="extra-info-date">(2004–2010)</span>
              <br />
              Machine Operator
            </p>
          </div>
          <div className="experience-card">
            <h3 className="experience-title">Education</h3>
               <p>
              <span className="place">PodManager AI</span> <br />
              <span className="extra-info-date">(2025–2026)</span>
              <br />
              Frontend Developer UX/UI Designer
            </p>
             <p>
              <span className="place">Medieinstitutet</span> <br />
              <span className="extra-info-date">(2024–2026)</span>
              <br />
              Frontend Developer
            </p>
            <p>
              <span className="place">Malmö University</span> <br />
              <span className="extra-info-date">(2003–2006)</span>
              <br />
              Construction Engineering <span className="extra-info">(Design)</span>
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
