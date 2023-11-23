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
import { PhoneModel } from "./components/PhoneModel";

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
          path: "/device-list/:id",
          element: <PhoneModel/>,
          loader: redirectIfUnaunthenticated,
        },
        {
          path: "/device-list/:id/device-detail/:id",
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
