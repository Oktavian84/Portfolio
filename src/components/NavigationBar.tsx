import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        Oktavian <span className="lastname">Paunku</span>
      </Link>
      <div className="nav-links">
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
