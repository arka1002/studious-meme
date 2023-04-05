import { Fragment, SVGProps, FC } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import LeftContainer from "components/Auth/LeftContainer";
import Input from "components/Inputs/Input";
import Logo from "assets/images/logos/logo.png";
import Button from "components/Buttons/Button";
import "assets/scss/auth.scss";
import { isEmpty } from "utils";
interface ISigninSchema {
  email: string;
  password: string;
}
const SignIn: FC = () => {
  const SignInSchema: Yup.ObjectSchema<ISigninSchema> = Yup.object().shape({
    password: Yup.string()
      .min(8, "Too Short! Minimum 8 Characters")
      .max(70, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
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
            </div>
            <Formik
              initialValues={{
                password: "",
                email: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={SignInSchema}
            >
              {({ errors, touched }) => (
                <>
                  <Form>
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

                    <Button
                      className={
                        isEmpty(errors)
                          ? "bg-customGreen-200 text-white"
                          : "opacity-70 cursor-not-allowed bg-slate-500 text-white"
                      }
                      type="submit"
                    >
                      Sign In
                    </Button>
                    <span className="block py-2 text-center text-gray-500">
                      or
                    </span>

                    <Link
                      className="bg-customGreen-400 w-full text-center text-white p-4 rounded-lg tracking-wide font-semibold focus:outline-none hover:opacity-70 shadow-md block"
                      to="/signup"
                      relative="path"
                    >
                      Sign Up
                    </Link>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
