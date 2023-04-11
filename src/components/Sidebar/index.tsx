import { ReactComponent as Activity } from "assets/images/navbar-icons/Activity.svg";
import { ReactComponent as Expenses } from "assets/images/navbar-icons/Expenses.svg";
import { ReactComponent as Home } from "assets/images/navbar-icons/Home.svg";
import { ReactComponent as BurnRate } from "assets/images/navbar-icons/ BurnRate.svg";
import { ReactComponent as Swap } from "assets/images/navbar-icons/Swap.svg";
import { ReactComponent as ArrowBack } from "assets/images/navbar-icons/ArrowBack.svg";
import { ReactComponent as Captable } from "assets/images/navbar-icons/Captable.svg";
import { ReactComponent as Work } from "assets/images/navbar-icons/Work.svg";
import { ReactComponent as Brain } from "assets/images/navbar-icons/Brain.svg";
import { ReactComponent as LogOut } from "assets/images/navbar-icons/Logout.svg";
import { ReactComponent as Profile } from "assets/images/navbar-icons/Profle.svg";
import NavItem from "components/Navbar/NavbarItem";
import { FC, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import "assets/scss/layout/sidebar.scss";
interface ISidebarProps {
  user?: any;
  showSidebar: boolean;
  toggler: (e: SyntheticEvent) => void;
}
const Sidebar: FC<ISidebarProps> = (props) => {
  return (
    <>
      <div className="dashboard__left p-3 z-10">
        <div className="absolute  -right-1 top-1/2" style={{ zIndex: "-1" }}>
          <div
            id="triangle-left"
            className={"bg-customGreen-200 z-0 rounded-full p-8"}
          >
            <div
              className={
                "absolute top-1/3 z-1 right-0 md:right-0 " +
                (props.showSidebar && " transform rotate-180")
              }
              onClick={(e: SyntheticEvent) => props.toggler(e)}
              role="button"
            >
              <ArrowBack className=" w-6 h-6 !text-white fill-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="sidebar-wrapper h-full w-full mx-auto bg-customGreen-200 z-90 ">
          <div className="flex flex-col  items-center">
            <Link to="/dashboard/settings">
              <div className="mt-4 pb-4 ">
                {props.user ? (
                  <img
                    alt="Profile-Picture"
                    className="  border-4 border-white rounded-full profilepic"
                  />
                ) : (
                  <Profile className="  border-4 border-white rounded-full profilepic" />
                )}
              </div>
            </Link>
          </div>
          <div className="nav-wrapper flex flex-col">
            <ul className="flex-1 ">
              <NavItem
                linkto="/general"
                pathname={"path"}
                title="General"
                active={true}
                icon={<Home className="font-bold" />}
              />
              <NavItem
                linkto="/valuation"
                pathname={"path"}
                active={false}
                title="Valuation"
                icon={<Work />}
              />
              <NavItem
                linkto="/revenue"
                pathname={"path"}
                title="Revenue"
                icon={<Activity />}
                active={false}
              />
              <NavItem
                linkto="/expenses"
                pathname={"path"}
                title="Expenses"
                icon={<Expenses />}
                active={false}
              />
              <NavItem
                linkto="/cap-table"
                pathname={"path"}
                title="Cap Table"
                icon={<Captable />}
                active={false}
              />

              <NavItem
                linkto="/financial-statement"
                pathname={"hello"}
                title="Financial Statement"
                icon={<Swap />}
                active={false}
              />

              <NavItem
                linkto="/ai"
                pathname={"hello"}
                title="Crossval AI"
                icon={<Brain />}
                active={false}
              />
            </ul>
          </div>
          <div className="text-white text-center py-2 cursor-pointer">
            {!props.showSidebar && (
              <p className="align-middle  hidden md:inline-block">Logout</p>
            )}
            <span className="ml-2 align-middle inline-block">
              <LogOut className=" w-6 h-6 text-white stroke-white" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
