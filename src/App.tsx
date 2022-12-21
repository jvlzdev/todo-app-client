import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import NavHeader from "./components/NavHeader";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <div className="font-inter">
      <NavHeader />
      <Intro />
      <Intro />
      <Intro />
      {/* <Portfolio />
      <Timeline />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;
