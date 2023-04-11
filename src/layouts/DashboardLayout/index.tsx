import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { FC, SyntheticEvent, useState } from "react";
import { Outlet } from "react-router-dom";
import "assets/scss/dashboard.scss";
const DashboardLayout: FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const toggler = (e: any) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <div
        className={
          "w-screen min-h-screen bg-white dashboard " +
          (showSidebar && "toggle")
        }
      >
        <>
          <Sidebar toggler={toggler} showSidebar={showSidebar} />
          <div className="dashboard__right pl-2 pr-4 md:pr-8">
            <Navbar />
            <Outlet />
          </div>
        </>
      </div>
    </>
  );
};

export default DashboardLayout;
