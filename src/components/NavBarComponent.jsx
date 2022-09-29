import { useSelector } from "react-redux";
import NavBarLinkPartial from "../partial/NavBarLinkPartial";

let links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Panel",
    url: "/panelpage",
  },
  {
    label: "About us",
    url: "/aboutus",
  },
];

let authLinks = {
  isLoggedIn: [
    {
      label: "Welcome",
      url: "/profile",
    },
    {
      label: "Logout",
      url: "/logout",
    },
  ],
  isLoggedOut: [
    {
      label: "Login",
      url: "/login",
    },
    {
      label: "Register",
      url: "/register",
    },
  ],
};

let bizLinks = [
  {
    label: "Create card",
    url: "/createcard",
  },
  {
    label: "My cards",
    url: "/mycards",
  },
];

const NavBarComponent = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dataFromToken = useSelector((state) => state.auth.userData);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li> */}
            {links.map((item, idx) => (
              <NavBarLinkPartial key={"navlinks" + idx} label={item.label} />
            ))}
            {dataFromToken &&
              dataFromToken.biz &&
              bizLinks.map((item, idx) => (
                <NavBarLinkPartial
                  key={"biznavlinks" + idx}
                  label={item.label}
                />
              ))}
          </ul>
          <form className="d-flex" role="search">
            {/* {loggedIn ? "You logged in" : "You need to login"} */}
            {loggedIn
              ? authLinks.isLoggedIn.map((item, idx) => (
                  <button
                    type="button"
                    key={"loggedIn" + idx}
                    className="btn btn-dark"
                  >
                    {item.label}
                  </button>
                ))
              : authLinks.isLoggedOut.map((item, idx) => (
                  <button
                    type="button"
                    key={"loggedOut" + idx}
                    className="btn btn-dark"
                  >
                    {item.label}
                  </button>
                ))}
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavBarComponent;
