import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import GetInvolved from "./pages/GetInvolved";
import ContactUs from "./pages/ContactUs";
import MusicCompetition from "./pages/MusicCompetition";
import DanceCompetition from "./pages/DanceCompetition";
import InstrumentCompetition from "./pages/InstrumentCompetition";
import MyHistory from "./pages/MyHistory";
import EventDetails1 from "./pages/EventDetails1";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/competition/music" element={<MusicCompetition />} />
        <Route path="/competition/dance" element={<DanceCompetition />} />
        <Route path="/competition/instrumental" element={<InstrumentCompetition />} />
        <Route path="/my-history" element={<MyHistory />} />
         <Route path="/events/:id" element={<EventDetails1 />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
