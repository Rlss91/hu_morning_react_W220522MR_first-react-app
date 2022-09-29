const NavBarLinkPartial = ({ label, link }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">
        {label}
      </a>
    </li>
  );
};
export default NavBarLinkPartial;
