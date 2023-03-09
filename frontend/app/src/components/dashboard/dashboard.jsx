import "./dashboard.css";
import Header from "./header/header";
import NavBar from "./navbar/navbar";
import useAuthentication from "../../hooks/useAuthentication";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const token = useAuthentication();
  const [NavbarView, setNavbarView] = useState("none");
  const MenuClickHandle = () => {
    if (NavbarView === "none") setNavbarView("block");
    else setNavbarView("none");
  };
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/account/user',
      {
        headers: { Authorization: token },
      }
    )
      .then((response) => {
        window.sessionStorage.setItem('username', response.data.username)
        window.sessionStorage.setItem('image_url', response.data.image_url)

      })
      .catch((error) => {
        console.log("error");
      });
  }, [token]);
  return (
    <div className="overflow-x-set">
      <div className="row bg-set">
        <NavBar props={NavbarView} />
        <div className="dashboard-context mx-auto align-self-start  col-11 col-lg-8 col-xxl-9 row">
          <Header props={MenuClickHandle} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
