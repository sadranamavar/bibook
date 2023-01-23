import "./header.css";
import Mail from "./mail/mail";
import Menu from "./menu/menu";
import Username from "./username/username";

const Header = ({props}) => {
  return (
    <div
      className="row dashboard-header bg-light
    mx-auto mt-3  rounded-4 shadow
    px-2 text-center col-12   overflow-hidden"
    >
      <Menu props={props}/>
      <div className="col-8"></div>
      <div className="col-2 row">
        <Mail />
        <Username props={"username"} />
      </div>
    </div>
  );
};

export default Header;
