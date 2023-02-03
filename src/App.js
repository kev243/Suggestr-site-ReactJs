import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import BookDemo from "./pages/BookDemo";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/bookdemo" element={<BookDemo />} />
          {/* si url ne correspond a rien on redirige vers la page home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
