import { Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Products from "./components/Products";
import Services from "./components/Services";
import Training from "./components/Training";
import DentalImplants from "./components/DentalImplants";
import BoneGrafts from "./components/BoneGrafts";
import SurgicalKits from "./components/SurgicalKits";
import ImplantTraining from "./components/ImplantTraining";
import BoneGraftWorkshops from "./components/BoneGraftWorkshops";
import EventCalendar from "./components/EventCalendar";
import RegisterTraining from "./components/RegisterTraining";
import MobileClinic from "./components/MobileClinic";
import CSRPrograms from "./components/CSRPrograms";
import Blog from "./components/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/training" element={<Training />} />
      <Route path="/products/dental-implants" element={<DentalImplants />} />
      <Route path="/products/bone-grafts" element={<BoneGrafts />} />
      <Route path="/products/surgical-kits" element={<SurgicalKits />} />
      <Route path="/training/implant-training" element={<ImplantTraining />} />
      <Route path="/training/bone-graft-workshops" element={<BoneGraftWorkshops />} />
      <Route path="/events" element={<EventCalendar />} />
      <Route path="/training/register" element={<RegisterTraining />} />
      <Route path="/mobile-clinic" element={<MobileClinic />} />
      <Route path="/csr-programs" element={<CSRPrograms />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;