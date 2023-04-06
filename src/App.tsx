import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "pages/Auth/SignUp";
import CrossvalAi from "pages/Dashboard/Ai";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/Crossval-ai",
      element: <CrossvalAi />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
