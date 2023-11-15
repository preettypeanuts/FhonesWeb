import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { CategoryPhoneModel } from "./components/CategoryPhoneModel";
import { Footer } from "./components/Footer";
import { PageDetail } from "./components/PageDetail";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <CategoryPhoneModel/>
      <PageDetail/>
      <Footer/>
    </>
  );
}

export default App;
