import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

function MainPage() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
export default MainPage;
