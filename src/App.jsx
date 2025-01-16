import Benefits from "./components/Events";
import Collaboration from "./components/Collaboration";
import ShaniFooter from "./components/ShaniFooter";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Competitions from "./components/Competitions";
import Spons from "./components/Spons";
import Team from "./components/Team";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/events" element={<Benefits />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/sponsors" element={<Spons />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <ShaniFooter />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
