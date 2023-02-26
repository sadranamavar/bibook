import { Outlet } from "react-router-dom";
import "./forms.css";

const Forms = () => {
  return (
    <div className="forms hide-scroll container p-5">
      <div className="bg-light mt-5 row rounded-4 shadow">
        <Outlet />
      </div>
    </div>
  );
};

export default Forms;
