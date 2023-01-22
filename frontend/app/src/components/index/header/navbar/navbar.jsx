import Profile from "./profile/profile";
import "./navbar.css";
import logo from "./icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="dropstart mx-4">
        <button
          className="d-block d-lg-none rounded-3 shadow-sm  dropdown-btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img className="menu-icon" src={logo}/>
        </button>
        <ul className="dropdown-menu menu-ul shadow-lg">
          <li>
            <a className="dropdown-item" href="#">
              <Profile />
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <h5 className="d-block p-2 mx-2 ">home</h5>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <h5 className="d-block  p-2 mx-2 ">about</h5>
            </a>
          </li>
          <li>
            <Link className="dropdown-item" to='/search'>
              <span className="d-block  p-2 mx-2 fs-5">search</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="d-none d-lg-flex">
        <h5 className="d-block p-2 mx-2 ">home</h5>
        <h5 className="d-block  p-2 mx-2 ">about</h5>

        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
