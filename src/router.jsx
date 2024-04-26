import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<AboutUs />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/tours" element={<Tours />} exact />
        <Route path="/tourDetails/:name" element={<TourDetails />} exact />
      </Routes>
    </Router>
  );
}
