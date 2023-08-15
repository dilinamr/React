import logo from "../logo.png";
import profile from "../profile.jpg";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div
        className="container-fluid"
        onClick={(Event) => console.log(Event.target)}
      >
        <a className="navbar-brand na" href="navbar.js">
          <img
            src={logo}
            alt="logo"
            height="30"
            className="d-inline-block align-text-top"
          />
          One school
        </a>
      </div>
      <div className="d-flex">
        <div className="dropdown dropstart">
          <button
            className="btn profile btn-circle custom-button"
            data-bs-toggle="dropdown"
          >
            <img src={profile} alt="profile" className="img-fluid" />
          </button>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                Sign-out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
