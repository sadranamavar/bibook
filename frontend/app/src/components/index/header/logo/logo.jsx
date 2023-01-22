import { Link } from "react-router-dom";
import logo from "./BIBOOK-logo-off_bg-small.png";
import "./logo.css";

const Logo = () => {
  return (
    <Link to='/'>
      <div className="navbar-brand">
        <img className="logo  d-block" src={logo} />
      </div>
    </Link>
  );
};

export default Logo;
