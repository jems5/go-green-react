import Services from "./components/Services";
import Cta from "./components/Cta";
import Pricing from "./components/Pricing";
import Skills from "./components/Skills2";
import Footer from "./components/Footer";
import "./App3.css";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import MainScroller from "./components/MainScroller";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <MainScroller />
      <AboutUs />
      <Services />
      <Cta />
      <Pricing />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
