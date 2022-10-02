import { NavLink } from "react-router-dom";

const NavBarLinkPartial = ({ label, link }) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={link}>
        {label}
      </NavLink>
    </li>
  );
};
export default NavBarLinkPartial;
