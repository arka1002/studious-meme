import { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "assets/images/logos/logo.png";
import Radio from "components/Inputs/Radio";
import { Formik, Form } from "formik";
import Button from "components/Buttons/Button";
import * as Yup from "yup";
import { isEmpty } from "utils";
interface IOnBoardingSchema {
  onboarding: string;
}
const OnBoardingWelcomePage: FC = () => {
  const OnBoardingSchema: Yup.ObjectSchema<IOnBoardingSchema> =
    Yup.object().shape({
      onboarding: Yup.string().required("Required"),
    });
  return (
    <>
      <div className="flex justify-center">
        <div className="mt-2 logo-wrapper">
          <a href="">
            <img src={Logo} alt="CrossVal" className="logo-img " />
          </a>
        </div>
      </div>
      <div className="w-full h-full ">
        <div className="w-full py-12 bg-white shadow-lg rounded-xl px-9 md:max-w-lg md:mx-auto">
          <div className="py-4 text-center">
            <h3 className="text-xl font-medium text-black">
              Welcome to Cross Val.
            </h3>
          </div>
          <div className="py-4 text-center text-black opacity-50">
            Please follow all the on-boarding steps to arrive at a valuation for
            the new company you are going to create!
          </div>
          <div className="mb-4 text-xl text-center">
            <label>Select Onboarding process</label>
          </div>

          <Formik
            initialValues={{
              onboarding: "",
            }}
            validationSchema={OnBoardingSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <>
                <Form>
                  <div className="flex justify-center mb-2 radiobuttons">
                    <Radio
                      id={"onboarding"}
                      name="onboarding"
                      type={"radio"}
                      label={"Onboarding"}
                      placeholder={"Onboarding"}
                      value={"onboarding"}
                      inputclassName={"!w-3"}
                      labelclassName="mx-2 mt-1"
                      className="ml-5"
                    />

                    <Radio
                      id={"existingdocument"}
                      name="onboarding"
                      type={"radio"}
                      label={"Existing Document"}
                      placeholder={"existingdocument"}
                      value={"existingdocument"}
                      inputclassName={"!w-3 ml-5"}
                      labelclassName="mx-2 mt-1"
                    />
                  </div>
                  {!isEmpty(errors) && (
                    <div className="error text-red-600 my-2 flex justify-center text-center">
                      {errors.onboarding}
                    </div>
                  )}
                  <div className=" w-48 py-4 mx-auto text-center">
                    <Button
                      className={
                        "py-2 text-white rounded-lg px-7 bg-customGreen-200 hover:opacity-80"
                      }
                      type="submit"
                    >
                      Get Started
                    </Button>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default OnBoardingWelcomePage;
