import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
