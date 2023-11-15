export const Navbar = () => {
  return (
    <>
      <header className="fixed-top" data-bs-theme="light">
        <nav className="navbar navBar">
          <div className="container-fluid">
            <a className="navbar-brand mergePosition">
              <i className="bx bx-command bx-spin" /> Fhones
            </a>
            <div>
              <a href="" className="navbar-brand navbar-text">
                Features
              </a>
              <a href="" className="navbar-brand navbar-text">
                Brand
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
                    <a
                      className="btn nav-link"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Login
                    </a>
                    <a
                      className="btn nav-link"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Register
                    </a>
                    <a
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
