import { FC } from "react";
import { Outlet } from "react-router-dom";
import LeftContainer from "components/Auth/LeftContainer";
interface AuthLayoutProps {
  children?: React.ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = (props) => {
  return (
    <>
      <section className="w-full h-screen antialiased auth-wrapper">
        <LeftContainer />
        <div className="h-full container-right overflow-auto">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default AuthLayout;
