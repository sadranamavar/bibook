import { Outlet } from "react-router-dom";
import "./library.css";

const Library = () => {
  return (
    <div className="row ms-2 pt-4">
      <Outlet />
    </div>
  );
};

export default Library;
