import { FC, ReactComponentElement } from "react";
import { Link } from "react-router-dom";
interface INavItemProps {
  title: string;
  icon: JSX.Element;
  active: boolean;
  linkto?: string;
  pathname: string;
  guest?: string;
}
const NavItem: FC<INavItemProps> = (props) => {
  return (
    <li className=" ">
      <Link
        to={(props.guest ? "/guest/dashboard" : "/dashboard") + props.linkto}
      >
        <div
          className={
            " nav-item my-2 border-transparent border-2  transition-all duration-500 block  hover:border-white  rounded-2xl mx-4 md:mx-6 item-link  border-white"
          }
        >
          <div className="text-white font-semibold flex  py-3 px-3 cursor-pointer">
            <span className="inline-block align-middle">{props.icon}</span>
            <p className="inline-block align-middle pl-2">{props.title}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
