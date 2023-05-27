import { Link } from "react-router-dom";

const LogoComponent = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=740&t=st=1683366033~exp=1683366633~hmac=2fbf5ac97fc6a0c3cfc45aec66a47c2aecdcfa8204c29ca030326e90f9b2c6b3"
              alt=""
              width="100"
              height="50"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

const HeaderComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <LogoComponent></LogoComponent>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"}> Home</Link>
              </li>
              <li className="nav-item">
              <Link to={"contact"}> Contact Us</Link>
              </li>
              <li className="nav-item">
              <Link to={"instamart"}>Instamart</Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
