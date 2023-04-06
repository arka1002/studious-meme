import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "pages/Auth/SignUp";
import CrossvalAi from "pages/Dashboard/Ai";
import OnBoardingWelcomePage from "pages/OnBoarding/WelcomePage";
import AuthLayout from "layouts/AuthLayout";
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <SignIn />,
  //   },
  //   {
  //     path: "/signup",
  //     element: <SignUp />,
  //   },
  //   {
  //     path: "/crossval-ai",
  //     element: <CrossvalAi />,
  //   },
  //   {
  //     path: "/onboarding",
  //     children: [
  //       {
  //         path: "welcome",
  //         element: <OnBoardingWelcomePage />,
  //       },
  //     ],
  //     element: <AuthLayout />,
  //   },
  // ]);
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/onboarding" element={<OnBoardingWelcomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
