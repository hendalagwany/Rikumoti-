import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTp";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <AppRoutes />
    <Footer />
    </BrowserRouter>
  );
}

export default App;