import "./header.css";
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
      <div className="col-10"></div>
      <div className="col-1 row ">
        <Username props={window.sessionStorage.getItem("username")} />
      </div>
    </div>
  );
};

export default Header;
