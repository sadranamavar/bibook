import "./dashboard.css";
import Header from "./header/header";
import NavBar from "./navbar/navbar";
import { useState } from "react";
import Counter from "./counter/counter";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [NavbarView, setNavbarView] = useState('none')
  const MenuClickHandle = () => {
    if (NavbarView === 'none')
      setNavbarView('block')
    else setNavbarView('none')
  }
  return (
    <div className="overflow-x-set">
      <div className="row bg-set">
        <NavBar props={NavbarView}/>
        <div className="dashboard-context mx-auto align-self-start  col-11 col-lg-8 col-xxl-9 row">
          <Header props={MenuClickHandle}/>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
