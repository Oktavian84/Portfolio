import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavigationBar;
