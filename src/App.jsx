import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./components/About";
import Competitions from "./components/Competitions";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Spons from "./components/Spons";
import Team from "./components/Team";
import Workshops from "./components/Workshops";
import GuestLecture from "./components/GuestLecture";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header className="fixed top-0 left-0 w-full z-50" />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/guestLecture" element={<GuestLecture />} />
          <Route path="/sponsors" element={<Spons />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
