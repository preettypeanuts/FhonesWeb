import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { CategoryPhoneModel } from "./components/CategoryPhoneModel";
import { Footer } from "./components/Footer";
import { PageDetail } from "./components/PageDetail";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <CategoryPhoneModel/>
      <PageDetail/>
      <Login/>
      <Register/>
      <Footer/>
    </>
  );
}

export default App;
