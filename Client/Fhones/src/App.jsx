import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LandingPage from "./pages/LandingPage";
import PhoneSpesificationPage from "./pages/PhoneSpesificationPage";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  const redirectIfUnaunthenticated = () => {
    if (!localStorage.Authorization) {
      return redirect("/login");
    }
    return null;
  };
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
          loader: () => {
            if (localStorage.Authorization) {
              return redirect("/");
            }
            return null;
          },
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/device-detail",
          element: <PhoneSpesificationPage />,
          loader: redirectIfUnaunthenticated,
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
