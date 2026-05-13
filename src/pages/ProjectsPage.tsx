import SchoolProjectsSection from "../components/SchoolProjectsSection";

const ProjectsPage = () => {
  return (
    <section className="projects-page">
      <div className="projects-page-inner">
        <SchoolProjectsSection scrollAnimation={false} />
      </div>
    </section>
  );
};

export default ProjectsPage;
