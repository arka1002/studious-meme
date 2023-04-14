import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "pages/Auth/SignUp";
import CrossvalAi from "pages/Dashboard/Ai";
import OnBoardingWelcomePage from "pages/OnBoarding/WelcomePage";
import AuthLayout from "layouts/AuthLayout";
import UploadExcel from "pages/OnBoarding/ExcelUpload";
import DashboardLayout from "layouts/DashboardLayout";
import Expenses from "components/OnBoardingData/Expenses";
import Metrics from "components/OnBoardingData/Metrics";
import NavTabs from "components/Valuation/Navtabs";
function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/onboarding" element={<OnBoardingWelcomePage />} />
          <Route path="/upload-excel" element={<UploadExcel />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/crossval-ai" element={<CrossvalAi />} />
        </Route>
        <Route path="/arka" element={<NavTabs/>}></Route>
      </Routes>
    </>
  );
}

export default App;
