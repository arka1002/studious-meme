import { Fragment, SVGProps } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import LeftContainer from "components/Auth/LeftContainer";
import Input from "components/Inputs/Input";
import Logo from "assets/images/logos/logo.svg";
const SignIn = ({ pageType = "login" }) => {
  return (
    <section className="w-full h-screen antialiased auth-wrapper">
      <LeftContainer />
      <div className="h-full container-right overflow-auto">
        <div className="absolute right-5 top-5">{/* <LanguageToggle /> */}</div>

        <div className="flex justify-center">
          <div className="logo-wrapper mt-2">
            <a href="">
              <img src={Logo} alt="CrossVal" className="logo-img " />
            </a>
          </div>
        </div>
        <div className="h-full w-full ">
          <div className="bg-white w-full rounded-xl shadow-lg py-12 px-12 md:max-w-lg md:mx-auto mb-5">
            <div className="block w-full mb-4">
              <h3 className="text-3xl font-medium text-center capitalize pb-4 leading-7 ">
                Login
              </h3>
              {pageType === "signin" && (
                <p className="text-gray-500 font-medium text-base text-center mb-4">
                  LoginLogin
                </p>
              )}
            </div>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
              }}
              onSubmit={() => {
                console.log("Hello");
              }}
            >
              <Form>
                {pageType === "signup" && (
                  <div className="pb-5 md:w-full">
                    <Input
                      name="fullName"
                      type={"text"}
                      label={"Company Name"}
                      placeholder={"Company Name"}
                      id={"fullName"}
                    />
                  </div>
                )}
                <div className="pb-5 md:w-full">
                  <Input
                    id={"email"}
                    name="email"
                    type={"email"}
                    label={"Email"}
                    placeholder={"test@example.com"}
                  />
                </div>
                <div className="pb-5 md:w-full">
                  <Input
                    id={"password"}
                    name="password"
                    type={"password"}
                    label={"Password"}
                    placeholder={"*******"}
                  />
                </div>

                <div className="pb-4">
                  <label
                    htmlFor="rememberMe"
                    className="text-gray-500 text-base font-normal"
                  >
                    <input
                      type="checkbox"
                      className="rounded mr-2 checked:bg-blue-600 checked:border-transparent"
                      name=""
                      id="rememberMe"
                    />
                    Remember me
                  </label>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
