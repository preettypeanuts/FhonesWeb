import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LandingPage from "./pages/LandingPage";
import PhoneSpesificationPage from "./pages/PhoneSpesificationPage";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/device-detail",
          element: <PhoneSpesificationPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
