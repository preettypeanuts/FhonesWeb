import { Link, useNavigate } from "react-router-dom";
import { CategoryPhoneModel } from "./CategoryPhoneModel";

export const Navbar = () => {
  const navigate = useNavigate();
  function logout() {
    localStorage.Authorization = "";
    navigate("/login");
  }

  return (
    <>
      <header className="fixed-top" data-bs-theme="light">
        <nav id="navbarNavigate" className="navbar navBar">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand mergePosition">
              <i className="bx bx-command bx-spin" /> Fhones
            </Link>
            <div>
              <a
                href="#brands"
                className="navbar-brand navbar-text"
              >
                Brands
              </a>
              <a href="#search" className="navbar-brand navbar-text">
                Search Wallpapers
              </a>
              <a href="" className="navbar-brand navbar-text">
                Categories
              </a>
            </div>
            <button
              className="btn mergePosition"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i className="bx bxs-collection bx-flip-vertical" />
              </span>
              Menu
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <div className="dropdown-center">
                    <Link
                      to={"/login"}
                      className="btn nav-link"
                    >
                      Login
                    </Link>
                    <Link
                      to={"/register"}
                      className="btn nav-link"
                    >
                      Register
                    </Link>
                    <a
                      onClick={logout}
                      className="btn nav-link"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
