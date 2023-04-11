import { FC, useState } from "react";
import { ReactComponent as WaveEmoji } from "assets/images/navbar-icons/Wave.svg";
import { ReactComponent as Notifications } from "assets/images/navbar-icons/Notification.svg";
import { Link } from "react-router-dom";
const Navbar: FC = () => {
  const [notificationCount, setNotificationCount] = useState<number>(0);
  return (
    <>
      <nav className="w-full py-4 ">
        <div className="flex justify-between items-center">
          <div className="bg-white px-4 ">
            <h2 className="font-medium text-2xl inline-block align-middle gradient-text capitalize">
              Hi
              <span className="align-middle inline-block px-4">
                <WaveEmoji />
              </span>
              <span className="capitalize ">Crossval</span>
            </h2>
          </div>
          <div className="bg-white py-4 pl-4 pr-6 flex">
            {/* <LanguageToggle /> */}
            <div className="relative left-5">
              <div className="absolute rounded-full -top-6 -right-2 text-white   text-center align-middle">
                {notificationCount && (
                  <div className="bg-customGreen-200 h-6 w-6 flex justify-center items-center p-1 rounded-full text-xs">
                    {notificationCount}
                  </div>
                )}
              </div>

              <Link to="/dashboard/notifications">
                <Notifications className="text-customGreen-200 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
